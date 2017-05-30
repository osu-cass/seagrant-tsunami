using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SeaGrant.Web.Models
{
    public class Place
    {
        string Name { get; set; }
        string Description { get; set; }
        List<Video> Videos { get; set; }
    }
}
