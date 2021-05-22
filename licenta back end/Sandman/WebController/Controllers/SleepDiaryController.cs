using Microsoft.AspNetCore.Mvc;
using Models;
using ServiceInterfaces;
using System.Collections.Generic;
using WebController.Helpers;

namespace WebController.Controllers
{
    [ApiController]
    public class SleepDiaryController
    {
        private ISleepDiaryService _sleepDiaryService;

        public SleepDiaryController(ISleepDiaryService sleepDiaryService)
        {
            _sleepDiaryService = sleepDiaryService;
        }

        [HttpGet("sleepdiary/all")]
        public IEnumerable<SleepDiary> GetAllSleepDiary()
        {
            return _sleepDiaryService.GetAll();
        }

        [Authorize]
        [HttpPost("sleepdiary/getbyuserid")]
        public IEnumerable<SleepDiary> GetAllSleepDiaryByUserId(User user)
        {
            return _sleepDiaryService.GetAllByUserId(user.ID);
        }

        [Authorize]
        [HttpPost("sleepdiary/add")]
        public void AddSleepDiary(SleepDiary sleepDiary)
        {
            _sleepDiaryService.Add(sleepDiary);
        }

        [Authorize]
        [HttpDelete("sleepdiary/delete")]
        public void DeleteSleepDiary([FromBody] SleepDiary sleepDiary)
        {
            _sleepDiaryService.Delete(sleepDiary.ID);
        }
    }
}
