interface ILogger{
    setNext(logger: ILogger): void;
    logMessage(message: string): string | null;
}

abstract class Logger implements ILogger{
    private nextLogger: ILogger;

    setNext(logger: ILogger) {
        this.nextLogger = logger;
        return logger;
    }
    logMessage(message: string) : string | null {
        if(this.nextLogger){
            return this.nextLogger.logMessage(message);
        }
        return null;
    }
}

class ConsoleLogger extends Logger{
    logMessage(message: string): string | null {
        const key = message.split(':')[0];
        if(key === 'console'){
            return 'logging to console...';
        }
        return super.logMessage(message)
    }
}

class FileLogger extends Logger{
    logMessage(message: string): string | null {
        const key = message.split(':')[0];
        if(key === 'file'){
            return 'logging to file...';
        }
        return super.logMessage(message)
    }
}

class DatabaseLogger extends Logger{
    logMessage(message: string): string | null {
        const key = message.split(':')[0];
        if(key === 'database'){
            return 'logging to database...';
        }
        return super.logMessage(message)
    }
}

const logger = new ConsoleLogger();
logger
    .setNext(new FileLogger())
    .setNext(new DatabaseLogger())

console.log(logger.logMessage(':Hello World'))