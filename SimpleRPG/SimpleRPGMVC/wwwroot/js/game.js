function initializeBattle() {
    var currentPlayer = new Player();
    var currentEnemy = Enemy();
    var currentBattle = battle(currentPlayer, currentEnemy);
    document.getElementById("battle_isOver").innerHTML = currentBattle.isOver().toString();
    document.getElementById("player_name").innerHTML = currentBattle.getPlayer().getName();
    document.getElementById("player_life").innerHTML = currentPlayer.getLife().toString();
    document.getElementById("enemy_life").innerHTML = currentEnemy.getLife().toString();
}
;
//# sourceMappingURL=game.js.map