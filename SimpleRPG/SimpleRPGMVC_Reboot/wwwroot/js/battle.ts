class Battle {
    private player: Player;
    private enemy: Enemy;

    constructor(_player: Player, _enemy: Enemy) {
        this.player = _player;
        this.enemy = _enemy;
    }

    get Player(): Player {
        return this.player;
    }

    set Player(value: Player) {
        if (value.name !== this.player.name || value.attack !== this.player.attack) {
            return;
        }
        this.player = value;
    }

    get Enemy(): Enemy {
        return this.enemy;
    }

    set Enemy(value: Enemy) {
        if (value.name !== this.enemy.name || value.attack !== this.enemy.attack) {
            return;
        }
        this.Enemy = value;
    }

    isOver(): boolean {
        return this.player.life <= 0 || this.enemy.life <= 0;
    }

    //test
    attack = (): any => {
        return $.ajax({
            type: "GET",
            url: "/Battle/Attack/",
            contentType: 'application/json; charset=utf-8',
            success: function (data, status, xhr) {
                if (xhr.getResponseHeader('Content-Type').includes("application/json")) {
                    $.extend(currentBattle.Player, data.player);
                    $.extend(currentBattle.Enemy, data.enemy);
                    updatePageFieldsBasedOnBattle();
                } else {
                    $("#main_container").html(data);
                }
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