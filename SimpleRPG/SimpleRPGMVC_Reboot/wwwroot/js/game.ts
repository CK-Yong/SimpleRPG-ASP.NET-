var currentBattle: Battle;
var currentPlayer: Player;
var currentEnemy: Enemy;

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

function instantiatePlayerAndBattleFromData(data: any) {
    const playerData = data.player;
    const enemyData = data.enemy;

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
    document.getElementById("player_name").innerHTML = currentBattle.Player.name.toString();
    document.getElementById("player_life").innerHTML = currentBattle.Player.life.toString();
    document.getElementById("player_mana").innerHTML = currentBattle.Player.mana.toString();
    document.getElementById("player_stamina").innerHTML = currentBattle.Player.stamina.toString();
    document.getElementById("player_experience").innerHTML = currentBattle.Player.experience.toString();
    document.getElementById("enemy_name").innerHTML = currentBattle.Enemy.name.toString();
    document.getElementById("enemy_life").innerHTML = currentBattle.Enemy.life.toString();
    document.getElementById("enemy_mana").innerHTML = currentBattle.Enemy.mana.toString();
    document.getElementById("enemy_stamina").innerHTML = currentBattle.Enemy.stamina.toString();
};

function setListeners(): void {
    document.getElementById("attack").onclick = currentBattle.attack;
}