using System;
using System.Collections.Generic;
using System.Text;
using System.Security.Cryptography;

namespace BLL.Interfaces
{
    public interface IHashPasswordService
    {

        public string GenerateHashForPassword(string password);

        public bool CheckPassword(string password, string realPassword);

    }
}
