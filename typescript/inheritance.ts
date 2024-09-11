class Product {

    constructor(protected id: string, protected price: number, protected description: string) {}
    display(){
        console.log(`Id ${this.id}!`);
        console.log(`Price ${this.price}!`);
        console.log(`Description ${this.description}!`);
    }
}

class Book extends Product{
    constructor(id: string, price: number, description: string ,private author: string, private title: string) {
        super(id, price, description);
    }
    display() {
        super.display()
        console.log(`Author ${this.author}!`);
        console.log(`Title ${this.title}!`);
    }
}

class Electronic extends Product{

    constructor(id: string, price: number, description: string, private brand: string, private model: string){
        super(id, price, description);
    }
    display() {
        super.display()
        console.log(`Brand ${this.brand}!`);
        console.log(`Model ${this.model}!`);
    }
}