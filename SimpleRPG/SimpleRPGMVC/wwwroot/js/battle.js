/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
var Battle = (function () {
    function Battle(_player, _enemy) {
        this.Player = _player;
        this.Enemy = _enemy;
    }
    Object.defineProperty(Battle.prototype, "player", {
        get: function () {
            return this.Player;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Battle.prototype, "enemy", {
        get: function () {
            return this.Enemy;
        },
        enumerable: true,
        configurable: true
    });
    Battle.prototype.isOver = function () {
        return this.Player.life <= 0 || this.Enemy.life <= 0;
    };
    Battle.prototype.attack = function () {
        return $.ajax({
            type: 'POST',
            url: '/Battle/Attack/',
            dataType: 'json',
            data: JSON.stringify(this)
        });
    };
    return Battle;
}());
//# sourceMappingURL=battle.js.map