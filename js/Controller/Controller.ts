/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */

export class Controller {
    speed: string = "13";

    constructor() {
    }

    drive() {
        console.log("driving " + this.speed + " forward")
    }
}

