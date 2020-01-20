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
    public class EmployerRepository :  BaseRepository ,IEmployerRepository
    {
        public EmployerRepository(string connectionString, IRepositoryContextFactory context) : base(connectionString, context)
        {
        }

        public async Task CreateEmployer(Employer employer)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
                context.Add(employer);
                await context.SaveChangesAsync();
            }
        }

        public async Task<Employer> GetEmployer(string email)
        {
            using (var context = Context.CreateDbContext(ConnectionString))
            {
               return await  context.Employers.FirstOrDefaultAsync();
            }
        }
    }
}
