var battle = (function (player:any, enemy:any) {
    var state = {
        Player: player,
        Enemy: enemy
    };

    var checkIfBattleIsOver = function (): boolean {
        if (state.Player.getLife() <= 0 || state.Enemy.getLife() <= 0) {
            return true;
        }
        return false;
    };

    return {
        getPlayer: function () {
            return state.Player;
        },
        getEnemy: function () {
            return state.Enemy;
        },
        isOver: function () {
            return checkIfBattleIsOver();
        }
    };
})