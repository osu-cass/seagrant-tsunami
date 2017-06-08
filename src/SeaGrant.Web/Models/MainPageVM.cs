using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Tsunami.Web.Models
{
    public class MainPageVM
    {
        public ImmutableArray<Place> Places { get; }
        public MainPageVM(ImmutableArray<Place> places)
        {
            Places = places;
        }
    }
}
