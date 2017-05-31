using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace SeaGrant.Web.Models
{
    public class Video
    {
        [XmlElement("VideoName")]
        public string Name { get; set; }
        [XmlElement("FileName")]
        public string FileName { get; set; }
        [XmlElement("Description")]
        public string Description { get; set; }
    }
}
