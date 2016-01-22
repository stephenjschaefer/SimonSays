using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimonSays.ViewModels
{
    public class HomeViewModel
    {
        private Array moves = new int[20];

        public Array Moves
        {
            get
            {
                int Min = 0;
                int Max = 4;
                Random randNum = new Random();
                int[] moves = Enumerable
                    .Repeat(0, 20)
                    .Select(i => randNum.Next(Min, Max))
                    .ToArray();
                return moves;
            }
        }
    }
}
