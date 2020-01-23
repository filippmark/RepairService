using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Interfaces;
using DAL.Entities;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class OrderService : IOrderService
    {
        private readonly IOrderRepository _orderRepository;
        private readonly IMapper _mapper;

        public OrderService(IOrderRepository orderRepository, IMapper mapper)
        {
            this._orderRepository = orderRepository;
            this._mapper = mapper;
        }


        public async Task CreateOrder(OrderDTO orderDTO)
        {
            Order order = _mapper.Map<Order>(orderDTO);
            await _orderRepository.AddOrder(order);
        }

        public async Task UpdateOrderStatus(int status, int orderId)
        {
            Order order = await _orderRepository.GetOrder(orderId);
            if (order != null)
            {
                order.Status = (OrderStatuses)status;
                await _orderRepository.UpdateOrder(order);
            }
                
        }
    }
}