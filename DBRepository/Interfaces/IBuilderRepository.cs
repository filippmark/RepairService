using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using DAL.Entities;


namespace DAL.Interfaces
{
    public interface IBuilderRepository
    {
        public Task<Builder> GetBuilder(string email);

        public Task CreateBuilder(Builder builder);

    }
}
