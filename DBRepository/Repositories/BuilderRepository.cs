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
    public class BuilderRepository : BaseRepository, IBuilderRepository
    {
        public BuilderRepository(string connectionString, IRepositoryContextFactory context) : base(connectionString, context)
        {
        }

        public async Task CreateBuilder(Builder builder)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                context.Builders.Add(builder);
                await context.SaveChangesAsync();
            }
        }

        public async Task<Builder> GetBuilder(string email)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                return await context.Builders.FirstOrDefaultAsync(p => p.Email == email);
            }
        }
    }
}
