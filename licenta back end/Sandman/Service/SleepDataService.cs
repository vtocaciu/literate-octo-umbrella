using Models;
using Repository;
using ServiceInterfaces;
using System;
using System.Collections.Generic;

namespace Service
{
    public class SleepDataService : ISleepDataService
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

        public void AddList(SleepData[] sleepDatas)
        {
            foreach(SleepData sleepData in sleepDatas)
            {
                Add(sleepData);
            }
        }

        public IEnumerable<SleepData> GetAllByUserId(Guid iD)
        {
            return _sleepDataRepository.GetAll().FindAll(sleep => sleep.UserID == iD);
        }
    }
}
