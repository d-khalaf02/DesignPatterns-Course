interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Prototype {
    private user: UserDetails;

    constructor(user: UserDetails) {
        this.user = user;
    }

    clone(): Prototype {
        const clone = Object.create(this);
        clone.user = this.user;
        return clone;
    }

    getUserDetails(): UserDetails {
        return this.user;
    }
}

let user1 = new ConcretePrototype({
    name: 'John',
    email: 'john@gmail.com',
    age: 20
})

let user2 = user1.clone();
if(user1 === user2){
    console.log("same instances");
}else{
    console.log(user1.getUserDetails());
    console.log(user2.getUserDetails());
}
