interface Shape{
    area(): number;
    perimeter(): number;
}

class Circle implements Shape{
    constructor(private radius: number){}
    area(){
        return Math.PI * this.radius * this.radius;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape{
    constructor(private width: number, private height: number){}
    area(): number{
        return this.width * this.height;
    }
    perimeter(): number{
        return 2 * (this.width + this.height);
    }
}

const circle: Shape = new Circle(20);
const rectangle: Shape = new Rectangle(20, 30)

function calculateArea(shape: Shape){
    return shape.area();
}

console.log("Circle's Area : " + calculateArea(circle) + "m");
console.log("Rectangle's Area : " + calculateArea(rectangle) + "m")