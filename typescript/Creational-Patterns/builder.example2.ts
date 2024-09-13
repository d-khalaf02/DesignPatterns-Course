
interface IPizza{
    size: string;
    dough: string;
    cheese: string;
    toppings: string;
    sauces: string;
}

interface IPizzaMaker{
    chooseSize(size: string): IPizzaMaker;
    chooseDough(dough: string): IPizzaMaker;
    chooseCheese(cheese: string): IPizzaMaker;
    chooseToppings(toppings: string): IPizzaMaker;
    chooseSauces(sauces: string): IPizzaMaker;

    make(): IPizza;
}

class Pizza implements IPizza{
    constructor(
        public size: string,
        public dough: string,
        public cheese: string,
        public toppings: string,
        public sauces: string)
    {
        return {
            size: this.size,
            dough: this.dough,
            cheese: this.cheese,
            toppings: this.toppings,
            sauces: this.sauces,
        }
    }
}

class PizzaMaker implements IPizzaMaker{
    private size: string = "";
    private dough: string = "";
    private cheese: string = "";
    private toppings: string = "";
    private sauces: string = "";

    chooseSize(size: string): IPizzaMaker {
        this.size = size;
        return this;
    }

    chooseDough(dough: string): IPizzaMaker {
        this.dough = dough;
        return this;
    }

    chooseCheese(cheese: string): IPizzaMaker {
        this.cheese = cheese;
        return this;
    }

    chooseToppings(toppings: string): IPizzaMaker {
        this.toppings = toppings;
        return this;
    }

    chooseSauces(sauces: string): IPizzaMaker {
        this.sauces = sauces;
        return this;
    }

    make(): IPizza{
        return new Pizza(
            this.size,
            this.dough,
            this.cheese,
            this.toppings,
            this.sauces,
        )
    }
}

class PizzaBuilderManager{
    constructor(private pizzaMaker: PizzaMaker){}

    smallPizza(size: string, dough: string, sauce: string) : IPizza{
        return this.pizzaMaker
            .chooseSize(size)
            .chooseDough(dough)
            .chooseSauces(sauce)
            .make();
    }
}

const pizzaMaker = new PizzaMaker();
const manager = new PizzaBuilderManager(pizzaMaker);
const pizza = manager.smallPizza(
    'small',
    'thin',
    'tomato sauce'
)

console.log(pizza)

