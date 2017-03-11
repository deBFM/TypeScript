/**
 * Created by Dennis Kronbügel on 11.03.2017.
 */
declare function require(moduleNames: string[], onLoad: (...args: any[]) => void): void;  // Manual loading
import {Controller} from "./Controller/Controller";

let controller = new Controller();
window['controller'] = controller; // make the controller global, so i could use onlick in HTML

// instead we can use jquery ready here.
require(['domReady!'], function (doc) {
    controller.setup();
});