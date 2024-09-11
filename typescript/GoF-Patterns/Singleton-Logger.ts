class Logger {
    private static instance: Logger;
    data: string;
    private constructor() {}

    static getInstance() {
        if(!this.instance){
            this.instance = new Logger();
        }
        return this.instance;
    }

    log(data: string){
        this.data = data;
        console.log("Logging data... " + data)
    }

    get getData(){
        return this.data;
    }
}

const logger = Logger.getInstance();
logger.log("User Data");

const logger2 = Logger.getInstance();

console.log("Logger 1 Data: " + logger.getData);
console.log("Logger 2 Data: " + logger2.getData);