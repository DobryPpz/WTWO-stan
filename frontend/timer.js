export class Timer {
    constructor(resetTime){
        this.value = 0;
        this.resetTime = resetTime;
    }
    setValue(newValue){
        this.value = newValue;
    }
    reset(){
        this.value = this.resetTime;
    }
}