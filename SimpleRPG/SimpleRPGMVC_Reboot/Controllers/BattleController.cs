using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGMVC.Controllers
{
    public class BattleController : Controller
    {
        private readonly EnemyFactory enemyFactory = new EnemyFactory();

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Attack()
        {
            // var incomingString = json;
            return Content("Success!");
        }
    }
}