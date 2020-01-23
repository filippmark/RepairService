﻿using BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface ISignInService
    {
        public Task<string> SingIn(EmployerDTO employer);

        public Task<string> SingIn(BuilderDTO builder);

    }
}