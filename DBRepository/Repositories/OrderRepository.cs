using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;
using DAL.Interfaces;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

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
                int result = await context.SaveChangesAsync();
                Debug.WriteLine("${0}!!!!!!!!!!!!!!!!!!", result, "validation");
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

        public async Task<IEnumerable<Order>> GetEmployerOrders(int employerId, int pageSize, int pageIndex)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                var orders = context.Orders.AsQueryable();

                return await orders.Where(p => p.EmployerId == employerId).OrderByDescending(p => p.CreatedAt).Skip(pageSize * pageIndex).Take(pageSize).ToListAsync();
            }
        }

        public async Task UpdateOrder(Order order)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                context.Orders.Update(order);
                await context.SaveChangesAsync();
            }
        }

    }
}
