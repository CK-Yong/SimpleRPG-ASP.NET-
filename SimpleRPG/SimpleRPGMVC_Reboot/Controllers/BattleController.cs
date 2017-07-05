using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGMVC.Controllers
{
    using Microsoft.AspNetCore.Http;
    using Model;
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
            return Content(playerAndEnemyToJson(player, enemy));
        }

        [HttpPost]
        public IActionResult Attack([FromBody]PlayerEnemyData data)
        {
            PlayerEnemyData data2 = data;
            Player player = data.Player;
            Enemy enemy = data.Enemy;
            player.RegularAttack(enemy);
            return Content(playerAndEnemyToJson(player, enemy));
        }

        private string playerAndEnemyToJson(Player player, Enemy enemy)
        {
            return "{\"player\":" + JsonConvert.SerializeObject(player) + "," +
                   "\"enemy\":" + JsonConvert.SerializeObject(enemy) + "}";
        }
    }
}