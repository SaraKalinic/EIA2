var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var inheritance;
(function (inheritance) {
    var Honigbiene = (function (_super) {
        __extends(Honigbiene, _super);
        function Honigbiene() {
            return _super.call(this) || this;
        }
        Honigbiene.prototype.collect = function () {
            //
        };
        return Honigbiene;
    }(inheritance.BieneData));
    inheritance.Honigbiene = Honigbiene;
})(inheritance || (inheritance = {}));
