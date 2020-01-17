using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;

namespace DAL.Interfaces
{
    public interface IOrderRepository
    {

        Task<List<Order>> GetOrders(int amount, int pageIndex);

        Task AddOrder(Order order);

        Task<Order> GetOrder(int orderId);

        Task DeleteOrder(int orderId);

    }
}
