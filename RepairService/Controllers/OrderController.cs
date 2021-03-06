﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using RepairService.ViewModels;
using BLL.DTO;
using Microsoft.Extensions.Logging;
using AutoMapper;
using BLL.Interfaces;
using RepairService.Filters;

namespace RepairService.Controllers
{
    [Route("api/[controller]")]
    public class OrderController : Controller
    {
        private readonly ILogger<EmployerController> _logger;
        private readonly IMapper _mapper;
        private readonly IOrderService _orderService;
        
        public OrderController(ILogger<EmployerController> logger, IMapper mapper, IOrderService orderService)
        { 
            _logger = logger;
            _mapper = mapper;
            _orderService = orderService;
        }


        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{employerId}/{pageSize}/{pageIndex}")]
        public async Task<IActionResult> Get(int employerId, int pageSize, int pageIndex)
        {

            var orders = await _orderService.GetEmployerOrders(employerId, pageSize, pageIndex);

            var orderModels = _mapper.Map<List<OrderModel>>(orders);

            return Ok(orderModels);
        }

        [ValidateModel]
        [HttpPost]
        public async Task<IActionResult> Post(OrderModel model)
        {
            OrderDTO order = _mapper.Map<OrderDTO>(model);
            order.CreatedAt = DateTime.Now;
            await _orderService.CreateOrder(order);
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody]int status)
        {
            await _orderService.UpdateOrderStatus(status, id);
            return Ok();
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
