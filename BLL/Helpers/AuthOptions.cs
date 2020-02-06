using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace BLL.Helpers
{
    public class AuthOptions
    {

        public const string ISSUER = "RepairService";
        public const string AUDIENCE = "RepairEmployer";
        const string KEY = "filimon777401b09eab3c013d4ca54922bb802bec8fd5318192b0a75f201d8b3727429090fb337591";
        public const int LIFETIME = 180;

        public static SymmetricSecurityKey GetSymmetricSecurityKey()
        {
            return new SymmetricSecurityKey(Encoding.ASCII.GetBytes(KEY));
        }
    }
}
