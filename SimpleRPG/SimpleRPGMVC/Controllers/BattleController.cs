// ReSharper disable RedundantUsingDirective
using Microsoft.AspNetCore.Mvc;
using SimpleRPG;

//todo fix namespaces in controller use dll
namespace SimpleRPGMVC.Controllers
{
    public class BattleController : Controller
    {
        public IActionResult Index()
        {
            var player = new Player("CK Yong");
            
            return View();
        }
    }
}