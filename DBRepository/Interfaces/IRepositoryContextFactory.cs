using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Interfaces
{
    public interface IRepositoryContextFactory
    {

        public RepositoryContext CreateDbContext(string connectionString);

    }
}
