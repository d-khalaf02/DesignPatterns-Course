// Implementation Layer
interface Database{
    connect(): void;
    query(sql: string): any;
    disconnect(): void;
}

class PostgreSQLDatabase implements Database{
    connect(){
        console.log('Connecting to PostgreSQLDatabase...');
    }
    query(sql: string): any{
        console.log("Query: " + JSON.stringify(sql));
        return "Data from PostgreSQLDatabase";
    }
    disconnect() {
        console.log("Disconnecting from PostgreSQLDatabase...");
    }
}

class MongoDBDatabase implements Database{
    connect(){
        console.log('Connecting to MongoDB database...');
    }
    query(sql: string): any{
        console.log("Query: " + JSON.stringify(sql));
        return "Data from MongoDB database";
    }
    disconnect() {
        console.log("Disconnecting from MongoDB database...");
    }
}

// Abstraction Layer
abstract class DatabaseService{
    constructor(protected database: Database){}

    abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService{
    fetchData(query: string): any {
        this.database.connect();
        this.database.query(query);
        this.database.disconnect();
    }
}

const postgreService = new ClientDatabaseService(new PostgreSQLDatabase())
postgreService.fetchData('GET username,password FROM USER');