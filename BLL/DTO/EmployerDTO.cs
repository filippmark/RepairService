﻿using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.DTO
{
    public class EmployerDTO : UserDTO
    {

        public ICollection<OrderDTO> Orders { get; set; }

        public ICollection<ReviewDTO> Reviews { get; set; }

    }
}
