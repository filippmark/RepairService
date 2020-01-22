using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.DTO
{
    public class BuilderDTO : UserDTO
    {
        public int Rating { get; set; }

        public ICollection<ReviewDTO> Reviews { get; set; }

        public ICollection<OrderDTO> Orders { get; set; }
    }
}
