abstract class PaymentProcessor{
    abstract pay(): void;
}

class CreditCard extends PaymentProcessor {
    pay(){
        console.log('Paying with Credit Card. ');
    }
}

class DebitCard extends PaymentProcessor {
    pay(){
        console.log('Paying with Debit Card. ');
    }
}

class PayPal extends PaymentProcessor {
    pay(){
        console.log('Paying with PayPal. ');
    }
}


function processPayment(payment: PaymentProcessor){
    payment.pay();
}

processPayment(new CreditCard());
processPayment(new DebitCard());
processPayment(new PayPal());