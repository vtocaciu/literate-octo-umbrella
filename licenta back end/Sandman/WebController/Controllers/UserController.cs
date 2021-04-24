using Microsoft.AspNetCore.Mvc;
using Models;
using ServiceInterfaces;
using System.Collections.Generic;

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

        [HttpPost("user/add")]
        public void AddUser(User user)
        {
            _userService.Add(user);
        }

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

        [HttpGet("user/getById")]
        public User GetUserByUid([FromBody] User user)
        {
            return _userService.GetById(user.ID);
        }

       
    }
}
