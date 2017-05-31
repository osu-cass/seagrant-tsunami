using SeaGrant.Web.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using System.Xml;
using System.Xml.Serialization;

namespace SeaGrant.Web.Utils
{
    public class XmlUtils
    {
        public static List<Place> LoadPlaces(string manifestFile)
        {
            XmlSerializer serializer = new XmlSerializer(typeof(PlacesManifest));

            using (FileStream fs = new FileStream(manifestFile, FileMode.Open))
            {
                XmlReader reader = XmlReader.Create(fs);
                PlacesManifest manifest = (PlacesManifest)serializer.Deserialize(reader);
                return manifest.Places;
            }
        }
    }
}
