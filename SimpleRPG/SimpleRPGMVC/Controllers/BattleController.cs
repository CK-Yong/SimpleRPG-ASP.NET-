using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Session;
using SimpleRPG;
using SimpleRPG.MonsterFactory;

namespace SimpleRPGMVC.Controllers
{
    public class BattleController : Controller
    {
        private EnemyFactory enemyFactory = new EnemyFactory();
        private Battle battle;
        private Player player;

        public IActionResult Index()
        {
            //todo make json representation of objects.
            player = new Player("CK Yong");
            var enemy = enemyFactory.MakeEnemy("Rodent");
            battle = new Battle(player, enemy);

            return View();
        }
    }
}