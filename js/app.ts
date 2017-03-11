/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */

import {Controller} from "./Controller/Controller";

let controller = new Controller();

window['controller'] = controller; // make the controller global, so i could use onlick in HTML

// instead we can use jquery ready here.
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;  // Manual loading
require(['domReady!'], function (doc) {
    console.log("addEventListener");
    document.getElementById("js").addEventListener("click", () => {
        controller.drive();
    });
});