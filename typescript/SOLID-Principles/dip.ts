interface IDatabase{
    save(data: string): void;
}

class MySqlDB implements IDatabase{
    save(data: string): void {
        console.log("MySql : " + data);
    }
}
class MongoDB implements IDatabase{
    save(data: string): void {
        console.log("MongoDB : " + data);
    }
}

class HighLevelModule {
    constructor(private database: MySqlDB) {}
    execute(data: string){
        this.database.save(data);
    }
}

const mySql = new MySqlDB();
const mongodb = new MongoDB();


const user = new HighLevelModule(mySql);
user.execute('{Username: John}')

const post = new HighLevelModule(mongodb);
post.execute('{Username: Tom}')