using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;
using BLL.Interfaces;
using System.Linq;

namespace BLL.Services
{
    public class HashPasswordService : IHashPasswordService
    {
        private const int iterationCount = 10000;

        public string GenerateHashForPassword(string password) 

        {
            byte[] salt = new byte[16];

            using (var rng = RandomNumberGenerator.Create())
            {
                rng.GetBytes(salt);
            }

            byte[] hash = GenerateHash(salt, password, iterationCount);


            return $"{iterationCount}.{Convert.ToBase64String(salt)}.{Convert.ToBase64String(hash)}";
        }

        public bool CheckPassword(string password, string realPassword)
        {
            var parts = realPassword.Split(".");

            int iterations = Convert.ToInt32(parts[0]);
            byte[] salt = Convert.FromBase64String(parts[1]);
            byte[] key = Convert.FromBase64String(parts[2]);

            byte[] hash = GenerateHash(salt, password, iterations);

            return hash.SequenceEqual(key);
        }

        private byte[] GenerateHash(byte[] saltArr, string password, int iterationCount)
        {
            return KeyDerivation.Pbkdf2(
                    password: password,
                    salt: saltArr,
                    prf: KeyDerivationPrf.HMACSHA1,
                    iterationCount: iterationCount,
                    numBytesRequested: 256 / 8);
        }
    }
}
