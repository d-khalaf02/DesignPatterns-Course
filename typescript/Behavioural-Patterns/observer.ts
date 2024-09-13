interface Observer{
    update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
    constructor(private id: number){}

    update(subject: Subject): void {
        console.log(`Observer ${this.id} updated, new State: ${subject.getState}`);
    }
}


interface Subject{
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObserver(): void;
    get getState(): number;
    set setState(state: number);
}

class ConcreteSubject implements Subject{
    private observers: Observer[] = [];
    private state: number = 0;

    addObserver(observer: Observer) {
        if(this.isExists(observer)){
            throw new Error('Observer already exists!!');
        }
        this.observers.push(observer);
        console.log('Observer added Successfully.')
    }

    removeObserver(observer: Observer) {
        if(!this.isExists(observer)){
            throw new Error('Observer dosen\'t exists!!');
        }
        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
        console.log('Observer removed Successfully.')
    }

    private isExists(observer: Observer): boolean {
        return this.observers.indexOf(observer) !== -1;
    }

    notifyObserver() {
        this.observers.forEach(observer => { observer.update(this)});
    }

    get getState(){
        return this.state;
    }

    set setState(state: number) {
        console.log('setting state to : ' + state);
        this.state = state;
        this.notifyObserver();
    }
}

const subject = new ConcreteSubject();
const observer = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2)

subject.addObserver(observer)
subject.addObserver(observer2)
subject.setState = 404;