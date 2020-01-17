﻿using System;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class UserDTO
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Password { get; set; }
    }
}
