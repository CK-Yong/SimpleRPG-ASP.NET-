var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(name, attack, defense, life, mana, stamina) {
        if (name === void 0) { name = "Standard Guinea Pig"; }
        if (attack === void 0) { attack = 5; }
        if (defense === void 0) { defense = 5; }
        if (life === void 0) { life = 25; }
        if (mana === void 0) { mana = 100; }
        if (stamina === void 0) { stamina = 100; }
        var _this = _super.call(this) || this;
        _this.Name = name;
        _this.Attack = attack;
        _this.Defense = defense;
        _this.Life = life;
        _this.Mana = mana;
        _this.Stamina = stamina;
        return _this;
    }
    return Enemy;
}(Entity));
//# sourceMappingURL=enemy.js.map