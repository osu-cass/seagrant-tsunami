using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SeaGrant.Tsunami.Web.Models
{
    public class Place
    {
        [XmlElement(elementName:"Name")]
        public string Name { get; set; }

        [XmlElement(elementName: "Description")]
        public string Description { get; set; }

        [XmlElement(elementName: "Order")]
        public int Order { get; set; }

        [XmlArray(elementName: "Videos")]
        [XmlArrayItem(elementName: "Video", type: typeof(Video))]
        public List<Video> Videos { get; set; }
    }
}
