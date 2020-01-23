using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RepairService.ViewModels;
using BLL.DTO;
using BLL.Interfaces;
using RepairService.Filters;

namespace RepairService.Controllers
{
    [Route("api/[controller]")]
    public class EmployerController : Controller
    {
        private readonly ILogger<EmployerController> _logger;
        private readonly IMapper _mapper;
        private readonly ISignUpService _signUpService;
        private readonly ISignInService _signInService;

        public EmployerController(ILogger<EmployerController> logger, IMapper mapper, ISignUpService signUpService, ISignInService signInService) 
        {
            _logger = logger;
            _mapper = mapper;
            _signUpService = signUpService;
            _signInService = signInService;
        }

        [ValidateModel]
        [HttpPost("signup")]
        public async Task<IActionResult> SignUp(SignUpModel model)
        {
            EmployerDTO employer = _mapper.Map<EmployerDTO>(model);
            await _signUpService.SingUp(employer);    
            return Ok();
        }

        [ValidateModel]
        [HttpPost("signin")]
        public async Task<IActionResult> SignIn(SignInModel model)
        {
            EmployerDTO employer = _mapper.Map<EmployerDTO>(model);
            string token = await _signInService.SingIn(employer);
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