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
            var session = HttpContext.Session;
            Player player;
            Enemy enemy;
            if (session.GetString("player") == null)
            {
                player = new Player();
                enemy = enemyFactory.MakeEnemy("rodent");
            }
            else
            {
                player = getPlayerFromSession(session);
                enemy = getEnemyFromSession(session);
            }
            updateEntitiesInSession(player, enemy, session);
            return Content(playerAndEnemyToJson(player, enemy));
        }

        [HttpGet]
        public IActionResult Attack()
        {
            var session = HttpContext.Session;
            Player player = getPlayerFromSession(session);
            Enemy enemy = getEnemyFromSession(session);

            return getViewFromOutcome(player, enemy, session);
        }

        private IActionResult getViewFromOutcome(Player player, Enemy enemy, ISession session)
        {
            if (player.IsDead)
            {
                return PartialView("Gameover");
            }
            if (enemy.IsDead)
            {
                return PartialView("Victory");
            }
            player.RegularAttack(enemy);
            updateEntitiesInSession(player, enemy, session);
            return Content(playerAndEnemyToJson(player, enemy), "application/json");
        }

        private string playerAndEnemyToJson(Player player, Enemy enemy)
        {
            return "{\"player\":" + JsonConvert.SerializeObject(player) + "," +
                   "\"enemy\":" + JsonConvert.SerializeObject(enemy) + "}";
        }

        private ISession updateEntitiesInSession(Player player, Enemy enemy, ISession session)
        {
            session.SetString("player", JsonConvert.SerializeObject(player));
            session.SetString("enemy", JsonConvert.SerializeObject(enemy));
            return session;
        }

        private Player getPlayerFromSession(ISession session)
        {
            return JsonConvert.DeserializeObject<Player>(session.GetString("player"));
        }

        private Enemy getEnemyFromSession(ISession session)
        {
            return JsonConvert.DeserializeObject<Enemy>(session.GetString("enemy"));
        }
    }
}