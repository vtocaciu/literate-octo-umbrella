﻿using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Models;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using ServiceInterfaces;
using Repository;
using System.Linq;

namespace Service
{
    public class AuthService : IAuthService
    {
        private readonly AppSettings _appSettings;
        private UserRepository _userRepository;

        public AuthService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
            _userRepository = new UserRepository();
        }


        public AuthResponse Authenticate(AuthRequest model)
        {

            User user = _userRepository.GetAll().SingleOrDefault(us => us.Username == model.Username && us.Password == model.Password);
            
            var token = generateJwtToken(user);

            return new AuthResponse(user, token);
        }

        private string generateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[] { new Claim("id", user.ID.ToString()) }),
                Expires = DateTime.UtcNow.AddDays(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }
}
