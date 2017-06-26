function initializeBattle() {
    var currentPlayer = Player();
    var currentEnemy = Enemy();
    var currentBattle = battle(currentPlayer, currentEnemy);

    document.getElementById("battle_isOver").innerHTML = currentBattle.isOver();
    document.getElementById("player_name").innerHTML = currentBattle.getPlayer().getName();
    document.getElementById("player_life").innerHTML = currentPlayer.getLife();
    document.getElementById("enemy_life").innerHTML = currentEnemy.getLife();
};