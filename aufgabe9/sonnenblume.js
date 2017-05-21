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
    var Sonnenblume = (function (_super) {
        __extends(Sonnenblume, _super);
        function Sonnenblume(_x, _y) {
            return _super.call(this, _x, _y, "#ffff99", "#ffff99", "#4d2600", "#4d2600") || this;
        }
        //Sonnenblume
        Sonnenblume.prototype.draw = function () {
            inheritance.crc2.beginPath();
            inheritance.crc2.fillStyle = this.fillColor;
            inheritance.crc2.strokeStyle = this.strokeColor;
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
            inheritance.crc2.fillStyle = this.fillColor1;
            inheritance.crc2.strokeStyle = this.strokeColor1;
            inheritance.crc2.moveTo(this.x + 28, this.y);
            inheritance.crc2.arc(this.x + 30, this.y, 17, 180, 270);
            inheritance.crc2.closePath();
            inheritance.crc2.fill();
            inheritance.crc2.stroke();
        };
        return Sonnenblume;
    }(inheritance.Blume));
    inheritance.Sonnenblume = Sonnenblume;
})(inheritance || (inheritance = {}));
