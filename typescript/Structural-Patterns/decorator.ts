interface Coffee{
    cost(): number;
    description(): string;
}

class BlackCoffee implements Coffee{
    constructor(){}

    cost(): number{
        return 2.45;
    }

    description(): string{
        return "this is a black coffee";
    }
}

abstract class CoffeeDecorator implements Coffee{
    constructor(protected coffee: Coffee){}

    abstract cost(): number;
    abstract description(): string;
}

class MilkDecorator extends CoffeeDecorator{
    cost(): number{
        return 3;
    }

    description(){
        return "this is a coffee with milk";
    }
}

let coffee = new BlackCoffee();
console.log(`Black Coffee cost: ${coffee.cost()}€ / description: ${coffee.description()}`);

coffee = new MilkDecorator(coffee);
console.log(`Coffee with milk cost: ${coffee.cost()}€ / description: ${coffee.description()}`);

