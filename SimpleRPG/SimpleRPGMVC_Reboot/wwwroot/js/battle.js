class Battle {
    constructor(_player, _enemy) {
        this.battleLog = "";
        this.attack = () => {
            var updateBattleUsingData = function (data) {
                $.extend(currentBattle.player, data.player);
                $.extend(currentBattle.enemy, data.enemy);
                if (data.log != null) {
                    currentBattle.battleLog = data.log;
                    return;
                }
                currentBattle.battleLog = "";
            };
            return $.ajax({
                type: "GET",
                url: "/Battle/Attack/",
                contentType: 'application/json',
                success: function (data, status, xhr) {
                    if (xhr.getResponseHeader('Content-Type').includes("application/json")) {
                        updateBattleUsingData(data);
                        updatePageFieldsBasedOnBattle();
                    }
                    else {
                        $("#main_container").html(data);
                    }
                },
                error: function (error) {
                    alert(error);
                }
            });
        };
        this.player = _player;
        this.enemy = _enemy;
    }
    get Player() {
        return this.player;
    }
    get Enemy() {
        return this.enemy;
    }
    isOver() {
        return this.player.life <= 0 || this.enemy.life <= 0;
    }
    get BattleLog() {
        return this.battleLog;
    }
}
function isJson(input) {
    try {
        JSON.parse(input);
    }
    catch (error) {
        return false;
    }
    return true;
}
//# sourceMappingURL=battle.js.map