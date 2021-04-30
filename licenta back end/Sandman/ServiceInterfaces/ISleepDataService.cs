using Models;
using System;
using System.Collections.Generic;

namespace ServiceInterfaces
{
    public interface ISleepDataService
    {
        void Add(SleepData sleepData);
        void Delete(Guid sleepDataId);
        List<SleepData> GetAll();
        SleepData GetById(Guid sleepDataId);
        void Update(SleepData sleepData);
        void AddList(SleepData[] sleepDatas);
        IEnumerable<SleepData> GetAllByUserId(Guid iD);
    }
}