interface Handler{
    setNext(handler: Handler): Handler;
    handle(order: Order): string | null;
}

class Order{
    isValid(): boolean{
        return true;
    }

    applyDiscount(): void{}

    processPayment(): boolean{
        return true;
    }

    ship(): void{}
}

abstract class AbstractHandler implements Handler{
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    handle(order: Order): string | null {
        if(this.nextHandler){
            return this.nextHandler.handle(order);
        }
        return null;
    }
}

class ValidationHandler extends AbstractHandler{
    handle(order: Order): string | null {
        if(order.isValid()){
            return super.handle(order)
        }
        return 'validation failed'
    }
}

class DiscountHandler extends AbstractHandler{
    handle(order: Order): string | null {
        order.applyDiscount()
        return super.handle(order)
    }
}

class PaymentHandler extends AbstractHandler{
    handle(order: Order): string | null {
        if(order.processPayment()){
            return super.handle(order)
        }
        return 'payment failed'
    }
}

class ShippingHandler extends AbstractHandler{
    handle(order: Order): string | null {
        order.ship();
        return 'Order processed and shipped'
    }
}

const order = new Order();
const orderHandler = new ValidationHandler();

orderHandler
    .setNext(new DiscountHandler())
    .setNext(new PaymentHandler())
    .setNext(new ShippingHandler());

console.log(orderHandler.handle(order));

