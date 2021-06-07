using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace web_api.Models
{
    public class MyStack<T>
    {
        private T[] items;

        private int count;

        const int n = 10;

        public MyStack()
        {
            items = new T[n];
        }

        public MyStack(int length)
        {
            items = new T[length];
        }

        public bool IsEmpty
        {
            get { return count == 0; }
        }

        public int Count
        {
            get { return count; }
        }

        public void Push(T item)
        {
            if (count == items.Length)
                Resize(items.Length + 10);

            items[count++] = item;
        }

        public T Pop()
        {
            if (IsEmpty)
                throw new InvalidOperationException("Стек пуст");

            T item = items[--count];

            items[count] = default(T);

            if (count > 0 && count < items.Length - 10)
                Resize(items.Length - 10);

            return item;
        }

        public T Peek()
        {
            return items[count - 1];
        }

        private void Resize(int max)
        {
            T[] tempItems = new T[max];

            for (int i = 0; i < count; i++)
                tempItems[i] = items[i];

            items = tempItems;
        }
    }
}
