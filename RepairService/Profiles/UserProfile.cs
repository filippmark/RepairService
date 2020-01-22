using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RepairService.ViewModels;
using BLL.DTO;
using DAL.Entities;

namespace RepairService.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<SignUpModel, BuilderDTO>();
            CreateMap<SignUpModel, EmployerDTO>();
            CreateMap<BuilderDTO, Builder>();
            CreateMap<EmployerDTO, Employer>();
        }

    }
}
