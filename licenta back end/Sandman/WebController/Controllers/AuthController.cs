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

        [HttpPost("auth/add")]
        public void AddUser(User user)
        {
            _authController.AddUser(user);
        }

        [HttpPost("auth/login")]
        public IActionResult Authenticate(AuthRequest model)
        {
            var response = _authController.Authenticate(model);

            if (response == null)
                return BadRequest(new { message = "Username or password is incorrect" });

            return Ok(response);
        }

    }
}
