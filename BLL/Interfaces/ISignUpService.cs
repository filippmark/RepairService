using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using BLL.DTO;

namespace BLL.Interfaces
{
    public interface ISignUpService 
    {
        public Task SingUp(EmployerDTO employer);

        public Task SingUp(BuilderDTO builder);
    }
}
