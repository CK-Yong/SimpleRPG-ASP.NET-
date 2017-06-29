let currentBattle: Battle;
let currentPlayer: Player = new Player();
let currentEnemy: Enemy = new Enemy();

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
    document.getElementById("enemy_mana").innerHTML = currentBattle.enemy.life.toString();
    document.getElementById("enemy_stamina").innerHTML = currentBattle.enemy.life.toString();
};

function setListeners(): void {
    document.getElementById("attack").onclick = currentBattle.attack();
}