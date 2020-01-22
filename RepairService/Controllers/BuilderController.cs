using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RepairService.ViewModels;


namespace RepairService.Controllers
{
    [Route("api/[controller]")]
    public class BuilderController : Controller
    {
        private readonly ILogger<EmployerController> _logger;
        private readonly IMapper _mapper;
        private readonly ISignUpService _signUpService;
        private readonly ISignInService _signInService;

        public BuilderController(ILogger<EmployerController> logger, IMapper mapper, ISignUpService signUpService, ISignInService signInService)
        {
            _logger = logger;
            _mapper = mapper;
            _signUpService = signUpService;
            _signInService = signInService;
        }

        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(SignUpModel model)
        {
            BuilderDTO builder = _mapper.Map<BuilderDTO>(model);
            await _signUpService.SingUp(builder);
            return Ok();
        }

        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInModel model)
        {
            BuilderDTO builder = _mapper.Map<BuilderDTO>(model);
            string token = await _signInService.SingIn(builder);
            if (token != null)
            {
                var response = new
                {
                    jwt = token,
                    userEmail = model.Email
                };
                return Ok(response);
            }
            else
            {
                return Unauthorized();
            }
        }
    }
}