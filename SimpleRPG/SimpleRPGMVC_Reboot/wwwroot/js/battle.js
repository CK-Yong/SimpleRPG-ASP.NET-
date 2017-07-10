class Battle {
    constructor(_player, _enemy) {
        //test
        this.attack = () => {
            return $.ajax({
                type: "GET",
                url: "/Battle/Attack/",
                contentType: 'application/json; charset=utf-8',
                success: function (data, status, xhr) {
                    if (xhr.getResponseHeader('Content-Type').includes("application/json")) {
                        $.extend(currentBattle.Player, data.player);
                        $.extend(currentBattle.Enemy, data.enemy);
                        updatePageFieldsBasedOnBattle();
                    }
                    else {
                        $("#main_container").html(data);
                    }
                }
            });
        };
        this.player = _player;
        this.enemy = _enemy;
    }
    get Player() {
        return this.player;
    }
    set Player(value) {
        if (value.name !== this.player.name || value.attack !== this.player.attack) {
            return;
        }
        this.player = value;
    }
    get Enemy() {
        return this.enemy;
    }
    set Enemy(value) {
        if (value.name !== this.enemy.name || value.attack !== this.enemy.attack) {
            return;
        }
        this.Enemy = value;
    }
    isOver() {
        return this.player.life <= 0 || this.enemy.life <= 0;
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