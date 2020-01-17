
using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class Review
    {
        public int Id { get; set; }

        public int Stars { get; set; }

        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }

        public int EmployerId { get; set; }

        public Employer Employer { get; set; }

        public int BuilderId { get; set; }

        public Builder Builder { get; set; }
    }
}
