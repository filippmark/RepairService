using System;
using System.Collections.Generic;
using System.Text;
using DAL.Interfaces;

namespace DAL.Repositories
{
    public abstract class BaseRepository
    {
        protected string ConnectionString { get; }
        protected IRepositoryContextFactory Context { get; }
        
        public BaseRepository(string connectionString, IRepositoryContextFactory  context)
        {
            ConnectionString = connectionString;
            Context = context;
        }
    }
}
