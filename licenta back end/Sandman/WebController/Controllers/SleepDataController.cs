using Models;
using Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebController.Controllers
{
    public class SleepDataController : ApiController
    {
        [HttpGet]
        public IEnumerable<SleepData> GetAllSleepDatas()
        {
            return new SleepDataService().GetAll();
        }

        [HttpPost]
        public void AddSleepData(SleepData sleepData)
        {
            new SleepDataService().Add(sleepData);
        }

        [HttpPut]
        public void UpdateSleepData(SleepData sleepData)
        {
            new SleepDataService().Update(sleepData);
        }

        [HttpDelete]
        public void DeleteSleepData(Guid sleepDataId)
        {
            new SleepDataService().Delete(sleepDataId);
        }
    }
}
