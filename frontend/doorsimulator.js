export class DoorSimulator {
    constructor(timer,doorContext,timerElement,currentStateElement){
        this.state = null;
        this.timer = timer;
        this.closedPercent = 0;
        this.doorContext = doorContext;
        this.timerElement = timerElement;
        this.currentStateElement = currentStateElement;
        this.haltEvent = false;
    }
    setCurrentStateName(newStateName){
        this.currentStateElement.innerText = newStateName;
    }
    updateTimer(){
        this.timerElement.innerText = this.timer.value;
    }
    draw(){
        //console.log(Math.round(this.doorContext.width*this.closedPercent/200));
        this.doorContext.context.clearRect(0,0,this.doorContext.width,this.doorContext.height);
        this.doorContext.context.fillStyle = "blue";
        this.doorContext.context.fillRect(
            0,
            0,
            Math.round(this.doorContext.width*this.closedPercent/200),
            this.doorContext.height);
        this.doorContext.context.fillRect(
            Math.round(this.doorContext.width*(1-this.closedPercent/200)),
            0,
            this.doorContext.width,
            this.doorContext.height
        );
    }
    changeState(state){
        this.draw();
        this.state = state;
    }
    open(){
        this.state.open();
    }
    stop(){
        this.state.stop();
    }
    close(){
        this.state.close();
    }
    start(){
        this.state.start();
    }
}