namespace inheritance {

    export abstract class Blume {
        x: number;
        y: number;
        r: number;
        strokeColor: string;
        fillColor: string;
        fillColor1: string;
        strokeColor1: string;
        fillColor2: string;
        strokeColor2: string;
        fillColor3: string;
        strokeColor3: string;

        constructor(_x: number, _y: number, _strokeColor: string, _fillColor: string, _strokeColor1: string, _fillColor1: string) {
            this.x = _x;
            this.y = _y;
            this.strokeColor = _strokeColor;
            this.fillColor = _fillColor;
            this.strokeColor1 = _strokeColor1;
            this.fillColor1 = _fillColor1;

        }


        draw(): void {
            //abstract
        }
    }

}