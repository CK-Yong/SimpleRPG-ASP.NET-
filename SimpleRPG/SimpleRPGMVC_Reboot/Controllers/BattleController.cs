using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGMVC.Controllers
{
    using Microsoft.AspNetCore.Http;
    using Newtonsoft.Json;

    public class BattleController : Controller
    {
        private readonly EnemyFactory enemyFactory = new EnemyFactory();

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Initialize()
        {
            Player player = new Player();
            Enemy enemy = enemyFactory.MakeEnemy("rodent");
            return Content("{\"player\":" + JsonConvert.SerializeObject(player) + "," +
                           "\"enemy\":" + JsonConvert.SerializeObject(enemy) + "}");
        }

        [HttpGet]
        public IActionResult Attack()
        {
            // var incomingString = json;
            return Content("Success!");
        }
    }
}