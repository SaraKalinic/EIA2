namespace inheritance {
    
export class Honigbiene extends BieneData {
   constructor(_x: number, _y: number) {
            super(_x, _y);
            this.drawBiene();
        }     

    collect() : void {
        //
    }
    
}
}