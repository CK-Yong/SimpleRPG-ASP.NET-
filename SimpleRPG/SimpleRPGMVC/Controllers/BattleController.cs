using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
using SimpleRPG.MonsterFactory;
using Microsoft.AspNetCore.Session;

namespace SimpleRPGMVC.Controllers
{
    public class BattleController : Controller
    {
        private EnemyFactory enemyFactory = new EnemyFactory();
        private Battle battle;
        private Player player;

        public IActionResult Index()
        {
            var session = HttpContext.Session;
            //todo make json representation of objects.
            if (session.TryGetValue("Player",))
            {
            }

            var enemy = enemyFactory.MakeEnemy("Rodent");
            battle = new Battle(player, enemy);

            return View();
        }
    }
}