using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Employer : User
    {

        public ICollection<Order> Orders { get; set; }

        public ICollection<Review> Reviews { get; set; }

    }
}
