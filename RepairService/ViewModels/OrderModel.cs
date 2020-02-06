using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RepairService.ViewModels
{
    public class OrderModel
    {
        public int? Id { get; set; }

        [Required]
        public string ShortDescription { get; set; }

        [Required]
        public string FullDescription { get; set; }

        [Required]
        public string Town { get; set; }

        [Required]
        public string Street { get; set; }
        
        [Required]
        public string House { get; set; }

        [Required]
        public DateTime Date { get; set; }
        
        [Required]
        public int PartOfDay { get; set; }

        [Required]
        public decimal Reward { get; set; }

        [Required]
        public bool IsNegotiable { get; set; }


        [Required]
        public int EmployerId { get; set; }

    }
}
