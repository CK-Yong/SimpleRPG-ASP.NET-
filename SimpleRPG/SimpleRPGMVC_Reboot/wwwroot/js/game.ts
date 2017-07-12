var currentBattle: Battle;
var battleLog: String;

function initializeBattle(): any {
    return $.ajax({
        type: 'get',
        url: '/Battle/Initialize',
        dataType: 'json',
        success: function (data) {
            instantiatePlayerAndBattleFromData(data);
            updatePageFieldsBasedOnBattle();
            setListeners();
        }
    });
}

function instantiatePlayerAndBattleFromData(data: any) {
    const playerData = data.player;
    const enemyData = data.enemy;
    
    var player = new Player(playerData.Name,
        playerData.Attack,
        playerData.Defense,
        playerData.Life,
        playerData.Mana,
        playerData.Stamina,
        playerData.Experience);

    var enemy = new Enemy(enemyData.Name,
        enemyData.Attack,
        enemyData.Defense,
        enemyData.Life,
        enemyData.Mana,
        enemyData.Stamina);
    currentBattle = new Battle(player, enemy);
}

function updatePageFieldsBasedOnBattle(): void {
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
    document.getElementById("battlelog_display").innerHTML = currentBattle.BattleLog.toString();
};

function setListeners(): void {
    document.getElementById("attack").onclick = currentBattle.attack;
}