﻿let currentBattle: Battle;
let currentPlayer: Player;
let currentEnemy: Enemy;

function initializeBattle(): any {
    return $.ajax({
        type: 'get',
        url: '/Battle/Initialize',
        dataType: 'json',
        success: function (data) {
            instantiatePlayerAndBattleFromData(data);
            updateBattle();
            setListeners();
        }
    });
}
//todo: tie character to database
function instantiatePlayerAndBattleFromData(data: any) {
    var playerData = data.player;
    var enemyData = data.enemy;

    currentPlayer = new Player(playerData.name,
        playerData.attack,
        playerData.defense,
        playerData.life,
        playerData.mana,
        playerData.stamina,
        playerData.experience);

    currentEnemy = new Enemy(enemyData.name,
        enemyData.attack,
        enemyData.defense,
        enemyData.life,
        enemyData.mana,
        enemyData.stamina);
}

function updateBattle(): void {
    currentBattle = new Battle(currentPlayer, currentEnemy);
    document.getElementById("battle_isOver").innerHTML = currentBattle.isOver().toString();
    document.getElementById("player_name").innerHTML = currentBattle.player.name.toString();
    document.getElementById("player_life").innerHTML = currentBattle.player.life.toString();
    document.getElementById("player_mana").innerHTML = currentBattle.player.mana.toString();
    document.getElementById("player_stamina").innerHTML = currentBattle.player.stamina.toString();
    document.getElementById("player_experience").innerHTML = currentBattle.player.experience.toString();
    document.getElementById("enemy_name").innerHTML = currentBattle.enemy.name.toString();
    document.getElementById("enemy_life").innerHTML = currentBattle.enemy.life.toString();
    document.getElementById("enemy_mana").innerHTML = currentBattle.enemy.mana.toString();
    document.getElementById("enemy_stamina").innerHTML = currentBattle.enemy.stamina.toString();
};

function setListeners(): void {
    document.getElementById("attack").onclick = currentBattle.attack;
}