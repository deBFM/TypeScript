/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */
declare function require(...args: any[]): any; // Ok Typescript require exists! Not the good solution, have to figure out that d.ts stuff
import {Controller} from "./Controller/Controller";

var controller = new Controller();
controller.drive();

require(['domReady!'], function (doc) {
    console.log("attach");
    document.getElementById("js").addEventListener("click", () => {
        controller.drive();
    });
});