var battle = (function (player, enemy) {
    var state = {
        Player: player,
        Enemy: enemy
    };
    var checkIfBattleIsOver = function () {
        if (state.Player.life <= 0 || state.Enemy.getLife() <= 0) {
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
});
//# sourceMappingURL=battle.js.map