

class User{
    constructor(public name: string){}
}

interface IteratorResult<T>{
    value: T | null;
    done: boolean;
}

interface Iterator<T>{
    next(): IteratorResult<T>;
    hasNext(): boolean;
}

interface Collection<T>{
    createIterator(): Iterator<T>;
}

class UserCollection implements Collection<User>{
    constructor(private users: User[]){}
    createIterator(): Iterator<User> {
        return new UserIterator(this)
    }

    getItems() {
        return this.users;
    }
}

class UserIterator implements Iterator<User>{
    private position: number = 0;

    constructor(private collection: UserCollection) {}

    hasNext() : boolean {
        return this.position < this.collection.getItems().length;
    }

    next(): IteratorResult<User> {
        if(this.hasNext()){
            return {
                value: this.collection.getItems()[this.position++],
                done: false
            }
        }
        else{
            return {
                value: null,
                done: true
            }
        }

    }

}

const users = [new User('John'), new User('Doe')];

const userCollection = new UserCollection(users);

const iterator = userCollection.createIterator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
