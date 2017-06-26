using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGMVC.Controllers
{
    using Microsoft.ApplicationInsights.Extensibility.Implementation;
    using Newtonsoft.Json;

    public class BattleController : Controller
    {
        private readonly EnemyFactory enemyFactory = new EnemyFactory();

        public IActionResult Index()
        {
            if (!Request.Cookies.ContainsKey("battle"))
            {
                var player = new Player("CK Yong");
                var enemy = enemyFactory.MakeEnemy("Rodent");
                var battle = new Battle(player, enemy);
                var serializedBattle = JsonConvert.SerializeObject(battle);
                Response.Cookies.Append("battle", serializedBattle);
            }
            else
            {
                //todo: return battle as cookie?
            }

            return View();
        }

        public IActionResult Attack()
        {
        }
    }
}