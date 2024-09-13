interface Employee{
    getName(): string;
    getSalary(): number;
    getRole(): string;
}


class Developer implements Employee{
    constructor(private name: string, private salary: number){
    }
    getName(): string {
        return this.name;
    }
    getSalary(): number {
        return this.salary;
    }

    getRole(): string {
        return "Developer";
    }
}

class Designer implements Employee{
    constructor(private name: string, private salary: number){
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRole(): string {
        return "Designer";
    }
}

interface CompositeEmployee extends Employee{
    addEmployee(employee: Employee): void;
    removeEmployee(employee: Employee): void;
    getEmployees(): Employee[];
}

class Manager implements CompositeEmployee{
    private employees: Employee[] = [];
    constructor(private name: string, private salary: number){}

    getName(){
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    getRole(){
        return "Manager";
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    removeEmployee(employee: Employee) {
        const index = this.employees.indexOf(employee);
        if(index > -1){
            this.employees.splice(index, 1);
        }
    }

    getEmployees(): Employee[] {
        return this.employees;
    }

}

const dev1 = new Developer('john doe', 3000);
const designer = new Designer('Mike', 2800);

const manager = new Manager('Aree', 8000);
manager.addEmployee(dev1)
manager.addEmployee(designer)

console.log(manager.getEmployees()[0].getSalary())