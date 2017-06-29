class Battle {
    private Player: Player;
    private Enemy: Enemy;

    constructor(_player: Player, _enemy: Enemy) {
        this.Player = _player;
        this.Enemy = _enemy;
    }

    get player(): Player {
        return this.Player;
    }

    get enemy(): Enemy {
        return this.Enemy;
    }

    isOver(): boolean {
        return this.Player.life <= 0 || this.Enemy.life <= 0;
    }

    attack(): any {
        return $.ajax({
            type: 'POST',
            url: '/Battle/Attack/',
            dataType: 'json',
            data: JSON.stringify({ "Player": this.player, "Enemy": this.enemy })
    });
    }
}