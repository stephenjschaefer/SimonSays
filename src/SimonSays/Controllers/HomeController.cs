using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using SimonSays.ViewModels;
using Microsoft.AspNet.Mvc.Formatters.Json;
using Newtonsoft.Json;

namespace SimonSays.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            ViewData["Title"] = "Simon Says!";
            return View();
        }

        public IActionResult Start()
        {
            HomeViewModel viewModel = new HomeViewModel();
            ViewBag.Moves = JsonConvert.SerializeObject(viewModel.Moves);
            ViewBag.Count = 10;
            ViewData["Title"] = "Start";
            return View("Index");
        }
    }
}
