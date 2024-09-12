enum CarType{
    SUV,
    Coupe,
    Limousine,
    Unknown = "The Car's Type is unknwon!!"
}

abstract class Car {
    constructor(protected model: string, protected productionYear: number){}

    abstract displayCarInfo(): void;
}

class SUV extends Car {
    displayCarInfo() {
        console.log("This is a SUV Car");
        console.log(`Model: ${this.model}!`);
        console.log(`ProductionYear: ${this.productionYear}!`);
    }
}

class Coupe extends Car {
    displayCarInfo() {
        console.log("This is a Coupe Car");
        console.log(`Model: ${this.model}!`);
        console.log(`ProductionYear: ${this.productionYear}!`);
    }
}

class Limousine extends Car {
    displayCarInfo() {
        console.log("This is a Limousine Car");
        console.log(`Model: ${this.model}!`);
        console.log(`ProductionYear: ${this.productionYear}!`);
    }
}

class CarFactory{
    create(type: CarType,  model: string,  productionYear: number): Car {
        switch(type){
            case CarType.SUV:
                return this.SUVCar(model, productionYear);
            case CarType.Coupe:
                return this.CoupeCar(model, productionYear);
            case CarType.Limousine:
                return this.LimousineCar(model, productionYear);
            default:
                throw new Error(CarType.Unknown);
        }
    }

    private SUVCar(model: string, productionYear: number){
        return new SUV(model, productionYear)
    }

    private CoupeCar(model: string, productionYear: number){
        return new Coupe(model, productionYear);
    }

    private LimousineCar(model: string, productionYear: number){
        return new Limousine(model, productionYear);
    }
}

const carFactory = new CarFactory();
const suv = carFactory.create(CarType.SUV, 'RSQ8', 2024);
const limousine = carFactory.create(CarType.Limousine, 'RS7', 2022)


suv.displayCarInfo()
console.log()
limousine.displayCarInfo()
