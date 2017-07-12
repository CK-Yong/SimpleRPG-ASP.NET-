class Battle {
    private player: Player;
    private enemy: Enemy;
    private battleLog: String = "";

    constructor(_player: Player, _enemy: Enemy) {
        this.player = _player;
        this.enemy = _enemy;
    }

    get Player(): Player {
        return this.player;
    }

    get Enemy(): Enemy {
        return this.enemy;
    }

    isOver(): boolean {
        return this.player.life <= 0 || this.enemy.life <= 0;
    }

    get BattleLog() {
        return this.battleLog;
    }

    attack = (): any => {
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
                } else {
                    $("#main_container").html(data);
                }
            },
            error: function (error) {
                alert(error);
            }
        });
    }
}

function isJson(input): boolean {
    try {
        JSON.parse(input);
    } catch (error) {
        return false;
    }
    return true;
}