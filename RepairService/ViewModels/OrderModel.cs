using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RepairService.ViewModels
{
    public class OrderModel
    {

        [Required]
        public string Town { get; set; }

        [Required]
        public int Street { get; set; }

        [Required]
        public string House { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public decimal Price { get; set; }
    }
}
