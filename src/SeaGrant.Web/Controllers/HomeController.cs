using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SeaGrant.Web.Providers;
using SeaGrant.Web.Models;

namespace SeaGrant.Web.Controllers
{
    public class HomeController : Controller
    {
        private TsunamiContext context;

        public HomeController(TsunamiContext tsunamiContext)
        {
            context = tsunamiContext;
        }
        public IActionResult Index()
        {
            var pageVM = new MainPageVM(context.Places);
            return View(pageVM);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
