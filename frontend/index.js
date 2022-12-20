import { DoorContext } from "./canvas.js";
import { DoorSimulator } from "./doorsimulator.js";
import {
    Closed,
    Opened,
    Closing,
    Opening
} from "./states.js";
import { Timer } from "./timer.js";
const open = document.getElementById("open");
const ls = document.getElementById("ls");

const doorSim = new DoorSimulator(new Timer(10),
DoorContext,
document.getElementById("toclosecounter"),
document.getElementById("currentstate"));

open.addEventListener("click",e => {
    doorSim.open();
});

ls.addEventListener("click",e => {
    if(doorSim.state instanceof Closing){
        doorSim.haltEvent = true;
    }
});

doorSim.changeState(new Closed(doorSim));