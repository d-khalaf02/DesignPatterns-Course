enum PaymentType{
    Paypal,
    Stripe,
    BankTransfer,
    Unknown = "Unknwon Payment method !!!"
}

abstract class PaymentProcessor{
    constructor(protected amount: number) {}

    abstract processPayment() : void;
}

class PaypalProcessor extends PaymentProcessor{
    processPayment() : void{
        console.log("Processing Paypal Payment with an AMOUNT of " + this.amount + "\n")
    }
}

class StripeProsessor extends PaymentProcessor{
    processPayment() : void{
        console.log("Processing Stripe Payment with an AMOUNT of " + this.amount + "\n")
    }
}

class BankTransferProcessor extends PaymentProcessor{
    processPayment() : void{
        console.log("Processing Bank Transfer with an AMOUNT of " + this.amount + "\n")
    }
}

class PaymentProcessorFactory{
    createProcessor(type: PaymentType, amount: number): PaymentProcessor{
        if(this.isPaypal(type)){
            return new PaypalProcessor(amount)
        }

        if(this.isStripe(type)){
            return new StripeProsessor(amount)
        }

        if(this.isBankTransfer(type)){
            return new BankTransferProcessor(amount);
        }

        throw new Error(PaymentType.Unknown);
    }

    private isPaypal(type: PaymentType){
        return type === PaymentType.Paypal;
    }
    private isStripe(type: PaymentType){
        return type === PaymentType.Stripe;
    }
    private isBankTransfer(type: PaymentType){
        return type === PaymentType.BankTransfer;
    }
}

const paymentFactory = new PaymentProcessorFactory();

const paypalPayment : PaypalProcessor = paymentFactory.createProcessor(PaymentType.Paypal, 2000);
paypalPayment.processPayment();

const stripePayment : StripeProsessor = paymentFactory.createProcessor(PaymentType.Stripe, 3000);
stripePayment.processPayment()

const bankTranfer : BankTransferProcessor = paymentFactory.createProcessor(PaymentType.BankTransfer, 8000);
bankTranfer.processPayment()

