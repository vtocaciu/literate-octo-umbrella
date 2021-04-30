using Microsoft.AspNetCore.Mvc;
using Models;
using ServiceInterfaces;
using System.Collections.Generic;
using WebController.Helpers;

namespace WebController.Controllers
{

    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpGet("user/all")]
        public IEnumerable<User> GetAllUsers()
        {
            return _userService.GetAll();
        }

        [Authorize]
        [HttpPut("user/update")]
        public void UpdateUser(User user)
        {
            _userService.Update(user);
        }

        [HttpDelete("user/delete")]
        public void DeleteUser([FromBody] User user)
        {
            _userService.Delete(user.ID);
        }

        [Authorize]
        [HttpGet("user/getById")]
        public User GetUserByUid([FromBody] User user)
        {
            return _userService.GetById(user.ID);
        }

       
    }
}
