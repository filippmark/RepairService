using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RepairService.ViewModels
{
    public class OrderModel
    {
        public string Town { get; set; }

        public int Street { get; set; }

        public string House { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }
    }
}
