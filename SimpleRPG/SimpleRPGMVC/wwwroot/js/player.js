var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function (_super) {
    __extends(Player, _super);
    //Todo: fix instantiation
    function Player() {
        var _this = _super.call(this) || this;
        _this.Experience = 0;
        _this.Name = "Unknown Player";
        _this.Attack = 5;
        _this.Defense = 5;
        _this.Life = 100;
        _this.Mana = 100;
        _this.Stamina = 100;
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