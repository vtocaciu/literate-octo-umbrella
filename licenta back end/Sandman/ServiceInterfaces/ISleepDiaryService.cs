using Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceInterfaces
{
    public interface ISleepDiaryService
    {
        void Add(SleepDiary sleepDiary);
        void Delete(Guid sleepDiaryId);
        List<SleepDiary> GetAll();
        SleepDiary GetById(Guid sleepDiaryId);
        List<SleepDiary> GetAllByUserId(Guid userId);
        void Update(SleepDiary sleepDiary);
    }
}
