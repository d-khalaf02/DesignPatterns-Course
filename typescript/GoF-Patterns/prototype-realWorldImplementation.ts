interface ShapeProperties{
    color: string;
    x: number;
    y: number;
}

abstract class Shape{
    constructor(public properties: ShapeProperties){ }
    abstract clone() : Shape;
}

class Rectangle extends Shape{
    constructor(properties: ShapeProperties, public width: number, public height: number){
        super(properties);
    }

    clone(): Shape {
        const clonedProperties: ShapeProperties = {
            color: this.properties.color,
            x: this.properties.x,
            y: this.properties.y
        }

        return new Rectangle(clonedProperties, this.width, this.height);
    }
}

const redRectangle = new Rectangle(
    {
        color: "red",
        x: 20,
        y: 40
    },
    400,
    200
)

const blueRectangle = redRectangle.clone();
blueRectangle.properties.color = "blue";

console.log(redRectangle.properties);
console.log(blueRectangle.properties);