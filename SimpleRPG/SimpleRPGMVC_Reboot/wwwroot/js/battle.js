class Battle {
    constructor(_player, _enemy) {
        //test
        this.attack = () => {
            var data = JSON.stringify({ Player: this.player, Enemy: this.enemy });
            return $.ajax({
                type: 'POST',
                url: '/Battle/Attack/',
                dataType: 'text',
                contentType: 'application/json',
                data: data,
                success: function (data) {
                    alert(data);
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
}
//# sourceMappingURL=battle.js.map