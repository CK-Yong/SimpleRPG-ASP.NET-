using Microsoft.AspNetCore.Mvc;
using SimpleRPG;
using SimpleRPG.MonsterFactory;
using System;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using SimpleRPG.Tools;

namespace SimpleRPGMVC.Controllers
{
    using Model;

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
            var battleFromSession = retrieveBattleFromSession(session);
            var player = battleFromSession.player;
            var enemy = battleFromSession.enemy;
            GenerateNewPlayerOrEnemyIfNeeded(ref player, ref enemy);
            var battleToString = SerializeBattle(player, enemy);
            updateEntitiesInSession(battleToString, session);
            return Content(battleToString);
        }

        [HttpGet]
        public IActionResult Attack()
        {
            var session = HttpContext.Session;
            var BattleFromSession = retrieveBattleFromSession(session);
            var player = BattleFromSession.player;
            var enemy = BattleFromSession.enemy;
            return getViewFromOutcome(player, enemy, session);
        }

        private void GenerateNewPlayerOrEnemyIfNeeded(ref Player player, ref Enemy enemy)
        {
            if (player == null || player.IsDead)
            {
                player = new Player();
                enemy = enemyFactory.MakeEnemy("rodent");
            }
            if (enemy == null || enemy.IsDead)
            {
                enemy = enemyFactory.MakeEnemy("rodent");
            }
        }

        private SerializedBattle retrieveBattleFromSession(ISession session)
        {
            var str = session.GetString("battle");
            if (str == null)
            {
                return new SerializedBattle();
            }
            return JsonConvert.DeserializeObject<SerializedBattle>(str);
        }

        private IActionResult getViewFromOutcome(Player player, Enemy enemy, ISession session)
        {
            player.RegularAttack(enemy);
            var battle = SerializeBattle(player, enemy);
            updateEntitiesInSession(battle, session);
            if (player.IsDead)
            {
                return PartialView("Gameover");
            }
            if (enemy.IsDead)
            {
                return PartialView("Victory");
            }

            return Content(battle, "application/json");
        }

        private ISession updateEntitiesInSession(String serializedBattle, ISession session)
        {
            session.SetString("battle", serializedBattle);
            return session;
        }

        private String SerializeBattle(Player player, Enemy enemy)
        {
            var log = Battlelog.getLogAndClear();
            var serializedBattle = new SerializedBattle()
            {
                player = player,
                enemy = enemy,
                log = log
            };
            return JsonConvert.SerializeObject(serializedBattle);
        }
    }
}