// ReSharper disable RedundantUsingDirective
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
//todo fix namespaces in controller
namespace SimpleRPGMVC.Controllers
{
    public class BattleController : Controller
    {
        public IActionResult Index()
        {
            
            Player player = new Player("CK Yong");
            return View();
        }
    }
}