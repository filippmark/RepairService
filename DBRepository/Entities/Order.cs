using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DAL.Entities
{
    public class Order
    {
        public int Id { get; set; }

        public string Town { get; set; }

        public string Street { get; set; }

        public string House { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Price { get; set; }

        public string Description { get; set; }

        public OrderStatuses Status { get; set; }

        public DateTime CreatedAt { get; set; }

        public int EmployerId { get; set; }

        public Employer Employer { get; set; }

        public int BuilderId { get; set; }

        public Builder Builder { get; set; }
    }

}
