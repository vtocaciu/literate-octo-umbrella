﻿using Models;
using System;
using System.Collections.Generic;

namespace ServiceInterface
{
    public interface IUserService
    {
        void Add(User user);
        void Delete(Guid userId);
        List<User> GetAll();
        User GetById(Guid userId);
        void Update(User user);
    }
}