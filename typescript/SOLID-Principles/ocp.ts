// regular 10%
// premium 20%
// added :: gold 30%

// Without Open-Closed Principle
class Discount{
    giveDiscount(customerType: 'premium' | 'regular') : number {
        if(customerType == 'premium'){
            return 20;
        }
        else if(customerType == 'regular'){
            return 10;
        }
    }
}

// With Open-Closed Principle
interface Customer{
    giveDiscount(): number;

    addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer{
    giveDiscount(): number {
        return 10;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent;
    }
}

class PremiumCustomer implements Customer{
    giveDiscount(): number {
        return 20;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 2;
    }
}

class GoldCustomer implements Customer{
    giveDiscount(){
        return 50;
    }

    addLoyaltyPoints(amountSpent: number): number {
        return amountSpent * 5;
    }

}


class Discount2{
    giveDiscount(customer: Customer): number {
        return customer.giveDiscount();
    }
}

const regularCustomer = new RegularCustomer();
const premiumCustomer = new PremiumCustomer();
const goldCustomer = new GoldCustomer();

const discount = new Discount2();
console.log("Regular Customer : " + discount.giveDiscount(regularCustomer));
console.log("Premium Customer : " + discount.giveDiscount(premiumCustomer));
console.log("Gold Customer : " + discount.giveDiscount(goldCustomer));
