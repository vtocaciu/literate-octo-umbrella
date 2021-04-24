using System;
using System.Collections.Generic;

namespace Repository
{
    public abstract class BaseRepository<T>
    {
        internal static string CONNECTION_STRING= "Host=localhost;Port=5432;Username=postgres;Password=postgres;Database=Sandman";
        public abstract void Add(T data);
        public abstract void Update(T data);
        public abstract void Delete(Guid dataId);
        public abstract List<T> GetAll();
        public abstract T GetById(Guid dataId);
    }
}
