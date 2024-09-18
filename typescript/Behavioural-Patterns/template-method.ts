abstract class DataParser{

    parseData() : void{
        this.loadData();
        const data = "My Data";
        const parsedData = this.parse(data);

        this.validate(parsedData);
        this.useData(parsedData);
    }

    protected loadData(): void{
        console.log('Loading data...');
    }

    protected validate(data: any): void{
        console.log(`Validating {${data}}`);
    }

    protected useData(data: any): void{
        console.log(`Using {${data}}`);
    }

    protected abstract parse(data: any): any;
}

class JSONParser extends DataParser{
    parse(data: any): any{
        console.log('Parsing JSON...');
        return data;
    }
}

class XMLParser extends DataParser{
    parse(data: any): any{
        console.log('Parsing XML...');
        return data;
    }
}

function parseData(dataParser: DataParser){
    dataParser.parseData()
}

console.log('Pasing JSON DAta....');
parseData(new JSONParser());

console.log('\nPasing XML DAta....');
parseData(new XMLParser());

