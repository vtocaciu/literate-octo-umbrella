using Models;
using Repository;
using ServiceInterfaces;
using System;
using System.Collections.Generic;

namespace Service
{
    public class UserService : IUserService
    {
        private UserRepository _userRepository;

        public UserService()
        {
            _userRepository = new UserRepository();
        }

        public void Add(User user)
        {
            user.ID = Guid.NewGuid();
            _userRepository.Add(user);
        }

        public void Update(User user)
        {
            _userRepository.Update(user);
        }

        public void Delete(Guid userId)
        {
            _userRepository.Delete(userId);
        }

        public List<User> GetAll()
        {
            return _userRepository.GetAll();
        }

        public User GetById(Guid userId)
        {
            return _userRepository.GetById(userId);
        }
    }
}
