using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.Entities;
using System.IdentityModel.Tokens.Jwt;
using BLL.Helpers;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Security.Principal;

namespace BLL.Services
{
    public class SignInService : ISignInService
    {
        private readonly IBuilderRepository _builderRepository;
        private readonly IEmployerRepository _employerRepository;
        private readonly IHashPasswordService _hashPasswordService;
        private readonly IMapper _mapper;


        public SignInService(IEmployerRepository employerRepository, IBuilderRepository builderRepository, IHashPasswordService hashPasswordService, IMapper mapper)
        {
            this._employerRepository = employerRepository;
            this._builderRepository = builderRepository;
            this._hashPasswordService = hashPasswordService;
            this._mapper = mapper;
        }


        public async Task<string> SingIn(BuilderDTO builderDTO)
        {
            Builder builder = await _builderRepository.GetBuilder(builderDTO.Email);
            if ((null != builder) && (_hashPasswordService.CheckPassword(builderDTO.Password, builder.Password)))
            {
                builderDTO.Id = builder.Id;
                return GenerateJWTToken(builder);
            }
            else
            {
                return null;
            }
        }

        public async Task<string> SingIn(EmployerDTO employerDTO)
        {
            Employer employer = await _employerRepository.GetEmployer(employerDTO.Email);
            if ((null != employer) && (_hashPasswordService.CheckPassword(employerDTO.Password, employer.Password)))
            {
                employerDTO.Id = employer.Id;
                return GenerateJWTToken(employer);
            }
            else
            {
                return null;
            }

        }


        private  string GenerateJWTToken(User user)
        {


            var handler = new JwtSecurityTokenHandler();


            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
                new Claim("id" , user.Id.ToString())
            };


            var identity = new ClaimsIdentity(claims);

            var token = handler.CreateJwtSecurityToken(
                subject: identity,
                signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256),
                audience: AuthOptions.AUDIENCE,
                issuer: AuthOptions.ISSUER,
                expires: DateTime.Now.AddSeconds(AuthOptions.LIFETIME)
           );


            return handler.WriteToken(token);
        }

    }
}
