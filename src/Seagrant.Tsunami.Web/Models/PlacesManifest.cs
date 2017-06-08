using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SeaGrant.Tsunami.Web.Models
{
    [XmlRoot(elementName:"Places")]
    public class PlacesManifest
    {
        [XmlElement("Place", typeof(Place))]
        public List<Place> Places { get; set; }
    }
}
