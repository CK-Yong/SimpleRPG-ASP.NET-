class Battle {
    constructor(_player, _enemy) {
        this.Player = _player;
        this.Enemy = _enemy;
    }
    get player() {
        return this.Player;
    }
    get enemy() {
        return this.Enemy;
    }
    isOver() {
        return this.Player.life <= 0 || this.Enemy.life <= 0;
    }
    attack() {
        var data = JSON.stringify({ "Player": this.player, "Enemy": this.enemy });
        return $.ajax({
            type: 'post',
            url: '/Battle/Attack/',
            dataType: 'text',
            contentType: "application/json; charset=utf-8",
            data: data,
            success: function (data) {
                alert(data);
            }
        });
    }
}
//# sourceMappingURL=battle.js.map