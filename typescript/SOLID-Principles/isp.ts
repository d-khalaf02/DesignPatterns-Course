// Without following Interface Segeration Principle
interface Machine{
    print(document: Document): void;
    scan(): void;
    fax(): void;
}
class MultifunctionPrinter implements Machine{
    print(){
        console.log("Printing...");
    }

    scan() {
        console.log("Scaning...");
    }

    fax() {
        console.log("Fax...");
    }
}

class SimplePrinter implements Machine{
    print() {
        console.log("Printing...");
    }
    scan() {
        console.log("Scaning...");
    }
    fax(){
        // This Method dose Nothing!! but must be implemented
    }
}


// With following Interface Segeration Principle
interface Printer{
    print(document: Document): void;
}
interface Scanner{
    scan(): void;
}
interface FaxMachine{
    fax(): void;
}

class MultifunctionPrinter2 implements Printer, Scanner, FaxMachine{
    print(){
        console.log("Printing...");
    }

    scan() {
        console.log("Scaning...");
    }

    fax() {
        console.log("Fax...");
    }
}

class SimplePrinter2 implements Printer{
    print() {
        console.log("Printing...");
    }
}