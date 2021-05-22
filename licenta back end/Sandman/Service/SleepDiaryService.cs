using Models;
using Repository;
using ServiceInterfaces;
using System;
using System.Collections.Generic;

namespace Service
{

    public class SleepDiaryService : ISleepDiaryService
    {
        private SleepDiaryRepository _sleepDiaryRepository;

        public SleepDiaryService()
        {
            _sleepDiaryRepository = new SleepDiaryRepository();
        }

        public void Add(SleepDiary sleepDiary)
        {
            sleepDiary.ID = Guid.NewGuid();
            _sleepDiaryRepository.Add(sleepDiary);
        }

        public void Update(SleepDiary sleepDiary)
        {
            _sleepDiaryRepository.Update(sleepDiary);
        }

        public void Delete(Guid sleepDiaryId)
        {
            _sleepDiaryRepository.Delete(sleepDiaryId);
        }

        public List<SleepDiary> GetAll()
        {
            return _sleepDiaryRepository.GetAll();
        }

        public List<SleepDiary> GetAllByUserId(Guid userId)
        {
            return _sleepDiaryRepository.GetAll().FindAll(x => x.UserID == userId);
        }

        public SleepDiary GetById(Guid sleepDiaryId)
        {
            return _sleepDiaryRepository.GetById(sleepDiaryId);
        }
    }
}
