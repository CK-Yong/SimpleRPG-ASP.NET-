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
                updatePageFieldsBasedOnBattle();
            }
        });
    }
}