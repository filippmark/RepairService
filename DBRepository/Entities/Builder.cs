using System;
using System.Collections.Generic;
using System.Text;

namespace DAL.Entities
{
    public class Builder : User
    {
        public int Rating { get; set; }

        public ICollection<Review> Reviews { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
