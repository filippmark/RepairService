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
            if ((null == builder) && (_hashPasswordService.CheckPassword(builderDTO.Password, builder.Password)))
            {
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
            if ((null == employer) && (_hashPasswordService.CheckPassword(employerDTO.Password, employer.Password)))
            {
                return GenerateJWTToken(employer);
            }
            else
            {
                return null;
            }

        }


        private  string GenerateJWTToken(User user)
        {
            var claims = new List<Claim>
                    {
                        new Claim(ClaimsIdentity.DefaultNameClaimType, user.Email),
                    };
            var identity = new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);

            JwtSecurityToken jwt =  new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    claims: identity.Claims,
                    notBefore: DateTime.Now,
                    expires: DateTime.Now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));

            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }

    }
}
