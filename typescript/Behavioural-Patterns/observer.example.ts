interface Observer {
    update(temperature: number, humidity: number, pressure: number): void;
}

class CurrentConditionsDisplay implements Observer{
    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        console.log("Observer Updated...")
        this.display()
    }

    display(){
        console.log(`
        Temperature: ${this.temperature},
        humidity: ${this.humidity},
        pressure: ${this.pressure}
        `)
    }
}

interface Subject{
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

class WeatherData implements Subject{
    private observers: Observer[] = [];

    private temperature: number | undefined;
    private humidity: number | undefined;
    private pressure: number | undefined;

    registerObserver(observer: Observer): void{
        if(this.isExists(observer)){
            throw new Error('Observer has already exists');
        }

        this.observers.push(observer);
        console.log('Observer added Successfully');
    }

    removeObserver(observer: Observer): void{
        if(!this.isExists(observer)){
            throw new Error('Observer dosen\'t exists');
        }

        const index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
        console.log('Observer removed Successfully');
    }

    private isExists(observer: Observer): boolean{
        return this.observers.indexOf(observer) !== -1;
    }

    notifyObservers() {
        if(this.temperature && this.humidity && this.pressure){
            this.observers.forEach(observer => {
                observer.update(this.temperature, this.humidity, this.pressure);
            })
        }

    }

    setMeasurements(temperature: number, humidity: number, pressure: number): void{
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers()
    }
}

const weatherData = new WeatherData()

const observer1 = new CurrentConditionsDisplay()
const observer2 = new CurrentConditionsDisplay()

weatherData.registerObserver(observer1);
weatherData.registerObserver(observer2);

weatherData.setMeasurements(12, 30, 20);
weatherData.setMeasurements(20, 35, 28);

