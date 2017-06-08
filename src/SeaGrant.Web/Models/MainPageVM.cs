using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Web.Models
{
    public class MainPageVM
    {
        public ImmutableArray<Place> Places { get; }
        public bool DemoMode { get; }
        public MainPageVM(ImmutableArray<Place> places, bool demoMode)
        {
            Places = places;
            DemoMode = demoMode;
        }
    }
}
