using Microsoft.AspNetCore.Mvc;
using Models;
using ServiceInterfaces;
using System.Collections.Generic;
using WebController.Helpers;

namespace WebController.Controllers
{
    [ApiController]
    public class SleepDataController
    {
        private ISleepDataService _sleepDataService;

        public SleepDataController(ISleepDataService sleepDataService)
        {
            _sleepDataService = sleepDataService;
        }

        [HttpGet("sleepdata/all")]
        public IEnumerable<SleepData> GetAllSleepData()
        {
            return _sleepDataService.GetAll();
        }

        [Authorize]
        [HttpPost("sleepdata/getbyuserid")]
        public IEnumerable<SleepData> GetAllSleepDataByUserId(User user)
        {
            return _sleepDataService.GetAllByUserId(user.ID);
        }

        [Authorize]
        [HttpPost("sleepdata/addlist")]
        public void AddSleepDataList(SleepData[] sleepDatas)
        {
            _sleepDataService.AddList(sleepDatas);
        }

        [Authorize]
        [HttpPost("sleepdata/add")]
        public void AddSleepData(SleepData sleepData)
        {
            _sleepDataService.Add(sleepData);
        }

        [Authorize]
        [HttpDelete("sleepdata/delete")]
        public void DeleteSleepData([FromBody] SleepData sleepData)
        {
            _sleepDataService.Delete(sleepData.ID);
        }
    }
}
