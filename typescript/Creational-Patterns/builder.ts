interface Builder{
    setPartA(): void;
    setPartB(): void;
    setPartC(): void;
}

class Product{
    private parts: string[] = [];

    constructor(){}

    add(part: string): void{
        this.parts.push(part);
    }

    listParts(): void{
        console.log("Product Parts : " + this.parts.join(", "));
    }
}

class ConcreteBuilder implements Builder{
    private product!: Product;

    constructor(){
        this.reset();
    }

    reset(){
        this.product = new Product();
    }

    setPartA(): void{
        this.product.add('Part A');
    }

    setPartB(): void{
        this.product.add('Part B');
    }

    setPartC(): void{
        this.product.add('Part C');
    }

    getProduct(){
        const result = this.product;
        this.reset();
        return result;
    }

}

class Director{
    private builder!: Builder;

    setBuilder(builder: Builder){
        this.builder = builder;
    }

    buildMinimumProduct(){
        this.builder.setPartA();
    }

    buildFullProdut(){
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}

const builder = new ConcreteBuilder();
const director = new Director();

director.setBuilder(builder);
director.buildMinimumProduct();

let minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullProdut();
let fullProdut = builder.getProduct();
console.log(fullProdut);