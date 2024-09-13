interface ServerRequest{
    handle(request: any): void;
}

class BaseServer implements ServerRequest{
    handle(request: any): void{
        console.log(`Handling Request {${request}}...`);
    }
}

abstract class ServerRequestDecorator implements ServerRequest{
    constructor(protected serverRequest: ServerRequest){}

    abstract handle(request: any): void;
}

class LoggingMiddleware extends ServerRequestDecorator{
    handle(request: any): void{

        console.log(`\nLogging Middleware...`);
        this.serverRequest.handle(request);
    }
}

class AuthMiddleware extends ServerRequestDecorator{
    handle(request: any): void{
        console.log(`\nAuthenticating Middleware...`);
        this.serverRequest.handle(request);
    }
}


let server = new BaseServer();
server.handle("GET 192.168.78.82/robots.txt");

server = new LoggingMiddleware(server);
server.handle("GET 192.168.78.82/index.html");

server = new AuthMiddleware(server);
server.handle("GET 192.168.78.82/robots.txt");