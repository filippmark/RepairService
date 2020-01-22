using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.DTO;

namespace BLL.Interfaces
{
    interface IOrderService
    {
        public Task CreateOrder(OrderDTO order);

        public Task UpdateOrderStatus(int status, int orderId);

    }
}