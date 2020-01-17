
using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace Models
{
    public class ReviewDTO
    {
        public int Id { get; set; }

        public int Stars { get; set; }

        public string Description { get; set; }

        public DateTime CreatedAt { get; set; }

        public int EmployerId { get; set; }

        public EmployerDTO Employer { get; set; }

        public int BuilderId { get; set; }

        public BuilderDTO Builder { get; set; }
    }
}
