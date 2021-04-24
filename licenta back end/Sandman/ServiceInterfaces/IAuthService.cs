using Models;

namespace ServiceInterfaces
{
    public interface IAuthService
    {
        AuthResponse Authenticate(AuthRequest model);
    }
}