interface Observer{
    update(subject: Subject): void;
}

class ConcreteObserver implements Observer {
    constructor(private id: number) {}

    update(subject: Subject): void {
        console.log(`Observer ${this.id} updated`);
        console.log(`New State: ${subject.getState()}`);
    }
}

interface Subject{
    addObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
    getState(): number;
    setState(state: number): void;
}

class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: number = 0;

    addObserver(observer: Observer) : void{
        if(this.isExists(observer)){
            throw new Error('Observer has already exists');
        }

        this.observers.push(observer);
        console.log('Observer added Successfully');
    }

    removeObserver(observer: Observer) : void{
        if(!this.isExists(observer)){
            throw new Error('Observer dosen\'t exists');
        }

        const index = this.observers.indexOf(observer);
        this.observers.splice(index , 1);

        console.log('Observer removed Successfully');
    }

    private isExists(observer: Observer): boolean{
        return this.observers.indexOf(observer) !== -1;
    }

    notifyObservers(): void{
        this.observers.forEach((observer: Observer): void => {
            observer.update(this)
        })
    }

    setState(state: number): void{
        this.state = state;
        console.log(`Setting new State...`)
        this.notifyObservers()
    }

    getState(): number{
        return this.state;
    }
}

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserver(1);
const observer2 = new ConcreteObserver(2);

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.setState(12);

