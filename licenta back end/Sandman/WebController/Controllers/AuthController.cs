using Microsoft.AspNetCore.Mvc;
using Models;
using Service;
using ServiceInterfaces;
using System;
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
        public IActionResult AddUser(User user)
        {
            try
            {
                _authController.AddUser(user);
                return Ok(new { message = "User created succesfully! " });
            }
            catch(Exception ex)
            {
                return Ok(new { message = "User already exists!" });
            }
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
