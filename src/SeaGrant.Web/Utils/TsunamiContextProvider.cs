using SeaGrant.Web.Configuration;
using SeaGrant.Web.Providers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Web.Utils
{
    public class TsunamiContextProvider
    {
        public static TsunamiContext LoadContext(AppSettings settings)
        {
            var places = XmlUtils.LoadPlaces(settings.PlacesManifestFile);
            places.ForEach(p => p.Videos = p.Videos.OrderBy(v => v.Order).ToList());
            places = places.OrderBy(p => p.Order).ToList();

            var context = new TsunamiContext(places);
            return context;
        }
    }
}
