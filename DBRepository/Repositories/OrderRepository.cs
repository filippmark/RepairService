using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;
using DAL.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DAL.Repositories
{
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(string connectionString, IRepositoryContextFactory context) : base(connectionString, context)
        {
        }

        public async Task AddOrder(Order order)
        {
            using(var context = Context.CreateDbContext(ConnectionString))
            {
                context.Orders.Add(order);
                await context.SaveChangesAsync();
            }
                    
        }

        public async Task DeleteOrder(int orderId)
        {
            Order order = new Order()
            {
                Id = orderId,
            };

            using(var context = Context.CreateDbContext(ConnectionString))
            {
                context.Orders.Remove(order);
                await context.SaveChangesAsync();
            }
        }

        public async Task<Order> GetOrder(int orderId)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                return await context.Orders.FirstOrDefaultAsync(p => p.Id == orderId);
            }
        }

        public async Task<List<Order>> GetOrders(int pageSize, int pageIndex)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                var orders = context.Orders.AsQueryable();

                return await orders.OrderByDescending(p => p.CreatedAt).Skip(pageSize * pageIndex).Take(pageSize).ToListAsync();
            }
        }
    }
}
