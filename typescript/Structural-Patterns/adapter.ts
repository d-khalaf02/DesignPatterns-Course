class Rectangle{
    constructor(private width: number, private height: number){}

    public getWidth(){
        return this.width;
    }

    public getHeight(){
        return this.height;
    }

    calculateArea(){
        return this.width * this.height;
    }
}

class Square {
    constructor(private side: number){}

    getSide(){
        return this.side;
    }

    calculateArea(){
        return this.side * this.side;
    }
}

// Adapter
class SquareToRectangle{
    constructor(private square: Square){}

    getWidth(){
        return this.square.getSide()
    }

    getHeight(){
        return this.square.getSide()
    }

    calculateArea(){
        const side = this.square.getSide();
        return side * side;
    }
}

let square = new Square(5);
let adapter = new SquareToRectangle(square);

console.log("Width : " + adapter.getWidth());
console.log("Height : " + adapter.getHeight());
console.log("area : " + adapter.calculateArea());

console.log(adapter)