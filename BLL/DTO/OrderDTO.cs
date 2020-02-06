using System;
using System.Collections.Generic;
using System.Text;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BLL.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }

        public string Town { get; set; }

        public string Street { get; set; }

        public string House { get; set; }

        [Column(TypeName = "decimal(18, 2)")]
        public decimal Reward { get; set; }

        public string ShortDescription { get; set; }

        public string FullDescription { get; set; }

        public PartsOfDayDTO PartOfDay { get; set; }

        public OrderStatusesDTO Status { get; set; }

        public DateTime CreatedAt { get; set; }

        public int? EmployerId { get; set; }

        public EmployerDTO Employer { get; set; }

        public int? BuilderId { get; set; }

        public BuilderDTO Builder { get; set; }
    }

}
