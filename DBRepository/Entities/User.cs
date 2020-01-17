﻿using System;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class User
    {
        public int Id { get; set; }

        public string Email { get; set; }

        public string Phone { get; set; }

        public string Password { get; set; }
    }
}
