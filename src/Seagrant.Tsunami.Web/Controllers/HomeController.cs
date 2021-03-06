﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SeaGrant.Tsunami.Web.Providers;
using SeaGrant.Tsunami.Web.Models;

namespace SeaGrant.Tsunami.Web.Controllers
{
    public class HomeController : Controller
    {
        private TsunamiContext context;

        public HomeController(TsunamiContext tsunamiContext)
        {
            context = tsunamiContext;
        }
        public IActionResult Index(bool demoMode = false)
        {
            var pageVM = new MainPageVM(context.Places, demoMode);
            return View(pageVM);
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
