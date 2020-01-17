using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;
using DAL.Interfaces;


namespace DAL.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        public Task AddOrder(Order order)
        {
            throw new NotImplementedException();
        }

        public Task DeleteOrder(int orderId)
        {
            throw new NotImplementedException();
        }

        public Task<Order> GetOrder(int orderId)
        {
            throw new NotImplementedException();
        }

        public Task<List<Order>> GetOrders(int amount, int pageIndex)
        {
            throw new NotImplementedException();
        }
    }
}
