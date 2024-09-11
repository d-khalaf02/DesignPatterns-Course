class SingletonExample{
    msg: string;
    private static instance: SingletonExample
    private constructor() {
    }

    static getInstance() {

        if (!this.instance){
            this.instance = new SingletonExample();
        }
        return this.instance;
    }

    printMessage(test: string){
        console.log(test)
        this.msg = test
    }
}

const singleton = SingletonExample.getInstance();
singleton.printMessage("Instance 1");

const singleton2 = SingletonExample.getInstance();
console.log("Singleton 2 message : " + singleton2.msg);