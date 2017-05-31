using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Web.Models
{
    public class MainPageVM
    {
        ImmutableArray<Place> Places { get; }
        public MainPageVM(ImmutableArray<Place> places)
        {
            Places = places;
        }
    }
}
