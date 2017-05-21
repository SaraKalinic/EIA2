var inheritance;
(function (inheritance) {
    class Honigbiene extends inheritance.BieneData {
        constructor(_x, _y) {
            super(_x, _y);
            console.log("Create circle");
            this.speed = 0.1;
            this.setRandomTargetPosition();
        }
        setRandomTargetPosition() {
            let randomtargetflower = Math.round(Math.random() * (inheritance.blumen.length - 1));
            this.xTarget = inheritance.blumen[randomtargetflower].x;
            this.yTarget = inheritance.blumen[randomtargetflower].y;
        }
        move() {
            let xDiff = this.xTarget - this.x;
            let yDiff = this.yTarget - this.y;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }
    }
    inheritance.Honigbiene = Honigbiene;
})(inheritance || (inheritance = {}));
//# sourceMappingURL=honigbienen.js.map