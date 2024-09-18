interface ICommand{
    execute():void;
    undo():void;
}

class Light{
    turnOn(): void{
        console.log('Turning on the Light')
    }
    turnOff(): void{
        console.log('Turning off the Light')
    }
}

class TurnOnCommand implements ICommand{
    constructor(private light: Light){}
    execute(): void{
        this.light.turnOn()
    }
    undo(): void{
        this.light.turnOff()
    }
}

class TurnOffCommand implements ICommand{
    constructor(private light: Light){}
    execute(): void{
        this.light.turnOff()
    }
    undo(): void{
        this.light.turnOn()
    }
}

class RemoteControl{
    private currentCommand! : ICommand;
    private undoCommand!:ICommand;
    private commandQueue: ICommand[] = [];

    setCommand(command: ICommand){
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(command);
    }

    buttonWasPressed(){
        if(this.commandQueue.length){
            const command = this.commandQueue.shift();
            command.execute();
        }
    }

    undoButtonWasPressed(){
        if(this.undoCommand){
            this.undoCommand.execute();
        }

    }

    hasCommands(): boolean{
        return this.commandQueue.length > 0;
    }
}

const remoteControl = new RemoteControl()
const turnOn = new TurnOnCommand(new Light);
const turnOff = new TurnOffCommand(new Light);

remoteControl.setCommand(turnOn)
remoteControl.buttonWasPressed();

remoteControl.setCommand(turnOff)
remoteControl.buttonWasPressed()

remoteControl.hasCommands() ? console.log('It has Commands.'): console.log('Has no Commands.' );
remoteControl.undoButtonWasPressed();


