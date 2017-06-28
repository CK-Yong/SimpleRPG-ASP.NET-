var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(name, attack, defense, life, mana, stamina) {
        if (name === void 0) { name = "Unknown Player"; }
        if (attack === void 0) { attack = 5; }
        if (defense === void 0) { defense = 5; }
        if (life === void 0) { life = 100; }
        if (mana === void 0) { mana = 100; }
        if (stamina === void 0) { stamina = 100; }
        var _this = _super.call(this) || this;
        _this.Experience = 0;
        _this.Name = name;
        _this.Attack = attack;
        _this.Defense = defense;
        _this.Life = life;
        _this.Mana = mana;
        _this.Stamina = stamina;
        return _this;
    }
    Object.defineProperty(Player.prototype, "experience", {
        get: function () {
            return this.Experience;
        },
        enumerable: true,
        configurable: true
    });
    return Player;
}(Entity));
//# sourceMappingURL=player.js.map