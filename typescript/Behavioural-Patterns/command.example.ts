interface ICommand{
    execute(): void;
    undo(): void;
}

class MyFileSystem{
    private commandQueue: ICommand[] = [];
    private undoCommand: ICommand;
    addCommand(command: ICommand){
        this.commandQueue.push(command);
    }

    execute(){
        const command = this.commandQueue.shift();
        this.undoCommand = command;
        command.execute();
    }

    undo(){
        this.undoCommand.undo();
    }

    hasCommands(): boolean{
        return this.commandQueue.length > 0;
    }
}

class CreateFile implements ICommand{
    constructor(private path: string){}

    execute(): void{
        console.log(`Create File : ${this.path}`);
    }
    undo(): void{
        console.log(`Delete File : ${this.path}`);
    }
}

class DeleteFile implements ICommand{
    constructor(private path: string){}

    execute(): void{
        console.log(`Delete File : ${this.path}`);
    }
    undo(): void{
        console.log(`Restore File : ${this.path}`);
    }
}

class UpdateFile implements ICommand{

    constructor(private path: string, private newContent: string, private oldContent: string){}

    execute(): void{
        console.log(`
        Update File : ${this.path},
        Old Content : ${this.oldContent},
        New Content : ${this.newContent}`,`
        `);
    }
    undo(): void{
        console.log('Restore Original Content : ', this.path);
    }
}

class ReadFile implements ICommand{
    constructor(private path: string){}

    execute(): void{
        console.log(`Reading File : ${this.path}`);
    }
    undo(): void{
        console.log(`Undo Operation not available for Reading File : ${this.path}`);
    }
}

const myFileSystem = new MyFileSystem();

const createFile = new CreateFile('command.txt');
const deleteFile = new DeleteFile('command2.txt');
const readFile = new ReadFile('command2.txt');
const updateFile = new UpdateFile('command2.txt', 'New Content', 'Old Content ');

myFileSystem.addCommand(createFile);
myFileSystem.execute()
myFileSystem.undo()

console.log('_________________________________')

myFileSystem.addCommand(deleteFile);
myFileSystem.execute()
myFileSystem.undo()

console.log('_________________________________')

myFileSystem.addCommand(readFile);
myFileSystem.execute()
myFileSystem.undo()

console.log('_________________________________\n\n')

myFileSystem.addCommand(updateFile);
myFileSystem.execute()
myFileSystem.undo()