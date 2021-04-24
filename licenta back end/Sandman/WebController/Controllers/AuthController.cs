using Microsoft.AspNetCore.Mvc;
using Models;
using Service;
using ServiceInterfaces;
using System.Collections.Generic;
using WebController.Helpers;

namespace WebController.Controllers
{
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authController;
        public AuthController(IAuthService authController)
        {
            _authController = authController;
        }

        [Authorize]
        [HttpGet("user/getallauth")]
        public IEnumerable<User> GetAllUsersAuth()
        {
            return new UserService().GetAll();
        }

        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthRequest model)
        {
            var response = _authController.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

    }
}
