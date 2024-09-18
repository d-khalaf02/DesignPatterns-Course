class ArrayIterator<ArrayType>{
    private position : number = 0;

    constructor(private collection : ArrayType[]) {}

    next(): ArrayType{
        let result : ArrayType = this.collection[this.position];

        this.position++;

        return result;
    }

    hasNext(){
        return this.position < this.collection.length;
    }
}

const array = [23, 324, 234, 234,34,45, 45];
const iterator = new ArrayIterator<number>(array);

while (iterator.hasNext()) {
    console.log(`
    this is the next Element in the array : ${iterator.next()}
    `)
}