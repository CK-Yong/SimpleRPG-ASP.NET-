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
    }
}