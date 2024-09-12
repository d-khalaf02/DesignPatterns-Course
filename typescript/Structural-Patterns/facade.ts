

class Grinder{
    grindBeans(): void{
        console.log("grinding breans...");
    }
}

class Boiler{
    boilWater(): void{
        console.log("boiling water...");
    }
}

class Brewer{
    brewCoffee() : void{
        console.log("breweing coffee...");
    }
}

class CoffeeMakerFacade{
    constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {}

    public makeCoffee() {
        this.grinder.grindBeans();
        this.boiler.boilWater();
        this.brewer.brewCoffee();
    }
}

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();