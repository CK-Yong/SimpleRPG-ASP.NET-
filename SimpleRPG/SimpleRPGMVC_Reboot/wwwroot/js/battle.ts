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

    get Enemy(): Enemy {
        return this.enemy;
    }

    isOver(): boolean {
        return this.player.life <= 0 || this.enemy.life <= 0;
    }
    //test
    attack = (): any => {
        var data = JSON.stringify({ "Player": this.player, "Enemy": this.enemy });
        return $.ajax({
            type: 'post',
            url: '/Battle/Attack/',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            data: data,
            success: function (data) {
                alert(data);
            }
        });
    }
}