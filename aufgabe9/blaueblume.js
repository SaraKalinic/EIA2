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
    var BlauBlume = (function (_super) {
        __extends(BlauBlume, _super);
        function BlauBlume(_x, _y) {
            var _this = _super.call(this, _x, _y, "#66ccff", "#66ccff", "#3399ff", "#3399ff") || this;
            _this.fillColor2 = "#ffff00";
            _this.strokeColor2 = "#ffff00";
            _this.fillColor3 = "#663300";
            _this.strokeColor3 = "#663300";
            return _this;
        }
        // Blaue Blume
        BlauBlume.prototype.draw = function () {
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.fillColor;
            inheritance.crc2.strokeStyle = this.strokeColor;
            inheritance.crc2.moveTo(this.x + 30, this.y - 26);
            inheritance.crc2.arc(this.x + 30, this.y - 26, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y - 13);
            inheritance.crc2.arc(this.x + 7, this.y - 13, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 52, this.y - 12);
            inheritance.crc2.arc(this.x + 52, this.y - 12, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y + 7);
            inheritance.crc2.arc(this.x + 7, this.y + 7, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 55, this.y + 12);
            inheritance.crc2.arc(this.x + 55, this.y + 12, 21, 180, 270);
            inheritance.crc2.moveTo(this.x + 30, this.y + 23);
            inheritance.crc2.arc(this.x + 30, this.y + 25, 21, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.fillColor1;
            inheritance.crc2.strokeStyle = this.strokeColor1;
            inheritance.crc2.moveTo(this.x + 30, this.y - 26);
            inheritance.crc2.arc(this.x + 30, this.y - 26, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y - 13);
            inheritance.crc2.arc(this.x + 7, this.y - 13, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 52, this.y - 12);
            inheritance.crc2.arc(this.x + 52, this.y - 12, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 7, this.y + 7);
            inheritance.crc2.arc(this.x + 7, this.y + 7, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 55, this.y + 12);
            inheritance.crc2.arc(this.x + 55, this.y + 12, 15, 180, 270);
            inheritance.crc2.moveTo(this.x + 30, this.y + 23);
            inheritance.crc2.arc(this.x + 30, this.y + 25, 15, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.fillColor2;
            inheritance.crc2.strokeStyle = this.strokeColor2;
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.fillColor3;
            inheritance.crc2.strokeStyle = this.strokeColor3;
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 9, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
        };
        return BlauBlume;
    }(inheritance.Blume));
    inheritance.BlauBlume = BlauBlume;
})(inheritance || (inheritance = {}));
