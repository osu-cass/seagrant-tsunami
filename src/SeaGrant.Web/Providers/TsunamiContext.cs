using SeaGrant.Tsunami.Web.Models;
using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Tsunami.Web.Providers
{
    public class TsunamiContext
    {
        public ImmutableArray<Place> Places { get; }

        public TsunamiContext(List<Place> places)
        {
            Places = places.ToImmutableArray();
        }
    }
}
