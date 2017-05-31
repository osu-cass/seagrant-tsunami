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
            var context = new TsunamiContext(places);
            return context;
        }
    }
}
