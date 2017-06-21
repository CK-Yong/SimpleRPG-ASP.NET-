using Microsoft.AspNetCore.Mvc;
using SimpleRPG;

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