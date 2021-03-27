using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Service;

namespace WebController.Controllers
{
    public class UserController : ApiController
    {
        [HttpGet]
        public IEnumerable<User> GetAllUsers()
        {
            return new UserService().GetAll();
        }

        [HttpPost]
        public void AddUser(User user)
        {
            new UserService().Add(user);
        }

        [HttpPut]
        public void UpdateUser(User user)
        {
            new UserService().Update(user);
        }

        [HttpDelete]
        public void DeleteUser(Guid userId)
        {
            new UserService().Delete(userId);
        }
    }
}
