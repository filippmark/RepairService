using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace RepairService.Helpers
{
    public class AuthOptions
    {

        public const string ISSUER = "RepairService";
        public const string AUDIENCE = "RepairEmployer";
        const string KEY = "filimon777";
        public const int LIFETIME = 180;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
