interface PaymentStrategy{
    pay(amount: number): void;
}

class PaypalStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`Paying ${amount} with Paypal.`);
    }
}

class CreditCardStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`Paying ${amount} with Credit Card.`);
    }
}

class BitcoinStrategy implements PaymentStrategy{
    pay(amount: number): void {
        console.log(`Paying ${amount} with Bitcoin.`);
    }
}

class ShoppingCart{
    private amount: number = 0;
    constructor(private strategy: PaymentStrategy){}

    changePaymentStrategy(strategy: PaymentStrategy){
        this.strategy = strategy;
    }

    addToCart(value: number){
        this.amount += value;
    }

    checkout(){
        this.strategy.pay(this.amount);
    }
}

const shoppingCart = new ShoppingCart(new PaypalStrategy())

shoppingCart.addToCart(20)
shoppingCart.addToCart(28)
shoppingCart.checkout()

shoppingCart.changePaymentStrategy(new BitcoinStrategy());
shoppingCart.addToCart(28);
shoppingCart.checkout()