/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */

export class Controller {
    speed: string = "14";

    constructor() {
    }

    drive() {
        console.log("driving " + this.speed + " forward")
    }

    setup() {

        console.log("addEventListener");
        document.getElementById("js").addEventListener("click", () => {
            this.drive();
        });

        //Example without Arrow Function
        var that = this;
        document.getElementById("js").addEventListener("click",function(){
            that.drive();
        });

        console.log("getCanvasElemet");
        let canvas = <HTMLCanvasElement> document.getElementById('canvas');
        var ctx2 = canvas.getContext('2d');

    }
}