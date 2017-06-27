var battle: any = (function (player:Player, enemy:any) {
    var state = {
        Player: player,
        Enemy: enemy
    };

    var checkIfBattleIsOver = function (): boolean {
        if (state.Player.life <= 0 || state.Enemy.getLife() <= 0) {
            return true;
        }
        return false;
    };

    return {
        getPlayer: function ():any {
            return state.Player;
        },
        getEnemy: function (): any  {
            return state.Enemy;
        },
        isOver: function ():boolean {
            return checkIfBattleIsOver();
        }
    };
})