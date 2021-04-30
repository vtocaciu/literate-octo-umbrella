using Models;

namespace ServiceInterfaces
{
    public interface IAuthService
    {
        void AddUser(User user);
        AuthResponse Authenticate(AuthRequest model);
    }
}