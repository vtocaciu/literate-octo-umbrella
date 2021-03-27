using Models;
using Repository;
using System;
using System.Collections.Generic;
using System.Text;

namespace Service
{
    public class SleepDataService
    {
        private SleepDataRepository _sleepDataRepository;

        public SleepDataService()
        {
            _sleepDataRepository = new SleepDataRepository();
        }

        public void Add(SleepData sleepData)
        {
            sleepData.ID = Guid.NewGuid();
            _sleepDataRepository.Add(sleepData);
        }

        public void Update(SleepData sleepData)
        {
            _sleepDataRepository.Update(sleepData);
        }

        public void Delete(Guid sleepDataId)
        {
            _sleepDataRepository.Delete(sleepDataId);
        }

        public List<SleepData> GetAll()
        {
            return _sleepDataRepository.GetAll();
        }

        public SleepData GetById(Guid sleepDataId)
        {
            return _sleepDataRepository.GetById(sleepDataId);
        }
    }
}
