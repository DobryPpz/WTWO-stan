export class Closed {
    constructor(context){
        this.context = context;
        this.context.closedPercent = 100;
        this.context.setCurrentStateName("Closed");
    }
    open(){
        this.context.changeState(new Opening(this.context));
    }
    stop(){}
    close(){}
    start(){}
}

export class Opening {
    constructor(context){
        this.context = context;
        this.context.setCurrentStateName("Opening");
        this.draw();
    }
    draw = () => {
        if(this.context.closedPercent > 0){
            this.context.closedPercent -= 0.5;
            this.context.draw();
            requestAnimationFrame(this.draw);
        }
        else{
            this.context.changeState(new Opened(this.context));
        }
    }
    open(){}
    stop(){}
    close(){}
    start(){}
}

export class Opened {
    constructor(context){
        this.context = context;
        this.context.setCurrentStateName("Opened");
        this.start();
    }
    open(){}
    stop(){}
    close(){
        this.context.changeState(new Closing(this.context));
    }
    start(){
        this.context.timer.reset();
        let interval = setInterval(() => {
            this.context.timer.setValue(this.context.timer.value-1);
            this.context.updateTimer();
        },1000);
        setTimeout(() => {
            clearInterval(interval);
            this.close();
        },this.context.timer.resetTime*1000);
    }
}

export class Closing {
    constructor(context){
        this.context = context;
        this.context.setCurrentStateName("Closing");
        this.draw();
    }
    draw = () => {
        if(this.context.haltEvent){
            this.open();
        }
        else if(this.context.closedPercent < 100){
            this.context.closedPercent += 0.5;
            this.context.draw();
            requestAnimationFrame(this.draw);
        }
        else{
            this.context.changeState(new Closed(this.context));
        }
    }
    open(){
        this.context.haltEvent = false;
        this.context.changeState(new Opening(this.context));
    }
    stop(){}
    close(){}
    start(){}
}