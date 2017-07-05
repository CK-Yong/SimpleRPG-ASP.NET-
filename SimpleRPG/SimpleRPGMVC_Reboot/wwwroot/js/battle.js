class Battle {
    constructor(_player, _enemy) {
        //test
        this.attack = () => {
            var data = JSON.stringify({ Player: this.player, Enemy: this.enemy });
            return $.ajax({
                type: 'POST',
                url: '/Battle/Attack/',
                dataType: 'json',
                contentType: 'application/json',
                data: data,
                success: function (data) {
                    $.extend(currentBattle.Player, data.player);
                    $.extend(currentBattle.Enemy, data.enemy);
                    updateBattle();
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
//# sourceMappingURL=battle.js.map