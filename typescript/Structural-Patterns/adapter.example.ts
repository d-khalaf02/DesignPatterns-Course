class MySqlDatabase{
    connectToMySql(uri: string){
        console.log('Connected to MySql Database : '+ uri);
    }
    executeQuery(query:string){
        console.log('Execute MySql Query : '+ query);
    }
}

class PostgreSqlDatabase{
    connectToPostgre(uri: string){
        console.log('Connecting to PostgreSQL database : '+ uri);
    }
    executeQuery(query:string){
        console.log('Execute Postgre Query : '+ query);
    }
}

class PostgreToMySql{
    constructor(private postgre: PostgreSqlDatabase){}

    connectToMySql(uri: string){
        this.postgre.connectToPostgre(uri);
    }

    executeQuery(query:string){
        this.postgre.executeQuery(query);
    }
}

const postgre = new PostgreSqlDatabase();
const postgreToMySql = new PostgreToMySql(postgre);
postgreToMySql.connectToMySql('mysql://192.3.28.65:3306/mydb');
postgreToMySql.executeQuery('GET username,password FROM USER');