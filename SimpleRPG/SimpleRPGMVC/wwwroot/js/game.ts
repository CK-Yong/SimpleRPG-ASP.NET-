function initializeBattle():void {
    let currentPlayer = new Player();
    let currentEnemy = Enemy();
    let currentBattle = battle(currentPlayer, currentEnemy);

    document.getElementById("battle_isOver").innerHTML = currentBattle.isOver().toString();
    document.getElementById("player_name").innerHTML = currentBattle.getPlayer().name;
    document.getElementById("player_life").innerHTML = currentPlayer.life.toString();
    document.getElementById("enemy_life").innerHTML = currentEnemy.getLife().toString();
};