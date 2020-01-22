using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RepairService.ViewModels;
using BLL.DTO;
using Microsoft.Extensions.Logging;
using AutoMapper;
using BLL.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RepairService.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly ILogger<EmployerController> _logger;
        private readonly IMapper _mapper;
        private readonly ISignUpService _signUpService;
        private readonly ISignInService _signInService;

        
        public OrderController(ILogger<EmployerController> logger, IMapper mapper, ISignUpService signUpService, ISignInService signInService)
        { 
            _logger = logger;
            _mapper = mapper;
            _signUpService = signUpService;
            _signInService = signInService;
        }



        // GET: api/<controller>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        [HttpPost]
        public void Post(OrderModel model)
        {
            OrderDTO order = _mapper.Map<OrderDTO>(model);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
