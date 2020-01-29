using AutoMapper;
using BLL.DTO;
using BLL.Interfaces;
using DAL.Entities;
using DAL.Interfaces;
using System.Threading.Tasks;

namespace BLL.Services
{
    public class SignUpService : ISignUpService
    {
        private readonly IBuilderRepository _builderRepository;
        private readonly IEmployerRepository _employerRepository;
        private readonly IHashPasswordService _hashPasswordService;
        private readonly IMapper _mapper;

        public SignUpService(IEmployerRepository employerRepository, IBuilderRepository builderRepository, IHashPasswordService hashPasswordService, IMapper mapper)
        {
            this._employerRepository = employerRepository;
            this._builderRepository = builderRepository;
            this._hashPasswordService = hashPasswordService;
            this._mapper = mapper;
        }

        public async Task SingUp(BuilderDTO builderDTO)
        {
            Builder builder = await _builderRepository.GetBuilder(builderDTO.Email);
            if (null == builder)
            {
                string hashedPassword =  _hashPasswordService.GenerateHashForPassword(builderDTO.Password);
                builder = _mapper.Map<Builder>(builderDTO);
                builder.Password = hashedPassword;
                await _builderRepository.CreateBuilder(builder);
            }
        }

        public async Task SingUp(EmployerDTO employerDTO)
        {
            Employer employer = await _employerRepository.GetEmployer(employerDTO.Email);
            if (null == employer)
            {
                string hashedPassword = _hashPasswordService.GenerateHashForPassword(employerDTO.Password);
                employer = _mapper.Map<Employer>(employerDTO);
                employer.Password = hashedPassword;
                await _employerRepository.CreateEmployer(employer);
            }
        }

    }
}
