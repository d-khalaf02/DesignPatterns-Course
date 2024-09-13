interface IButton{
    render(): void;
    onClick(f: Function): void;
}

interface ICheckbox{
    render(): void;
    toggle(): void;
}

interface GUIFactory{
    createButton(): IButton;
    createCheckbox(button: IButton): ICheckbox;
}

class WindowsButton implements IButton{
    render() : void {
        console.log("Rendering a button in Windows Style...");
    }

    onClick(f: Function) {
        console.log("Clicked");
        f();
    }
}

class WindowsCheckbox implements ICheckbox{
    constructor(private button: IButton){}
    render() : void {
        console.log("Rendering a checkbox in Windows Style...");
    }
    toggle(): void{
        this.button.onClick(() => {
            console.log("Windows toggling...");
        })

    }
}

class MacButton implements IButton{
    render() : void {
        console.log("Rendering a button in Mac Style...");
    }

    onClick(f: Function) {
        console.log("Clicked");
        f();
    }
}

class MacCheckbox implements ICheckbox{
    constructor(private button: IButton){}
    render() : void {
        console.log("Rendering a checkbox in Mac Style...");
    }
    toggle(): void{
        this.button.onClick(() => {
            console.log("Mac toggling...");
        })

    }
}

class WindowsFactory implements GUIFactory{
    createButton(): IButton {
        return new WindowsButton();
    }

    createCheckbox(button: IButton): ICheckbox {
        return new WindowsCheckbox(button);
    }
}

class MacFactory implements GUIFactory{
    createButton(): IButton {
        return new MacButton();
    }

    createCheckbox(button: IButton): ICheckbox {
        return new MacCheckbox(button);
    }
}

function renderUI(factory: GUIFactory){
    const button = factory.createButton();
    const checkbox = factory.createCheckbox(button);

    button.render();
    checkbox.render();

    button.onClick(() => {
        console.log("Button clicked");
    })
    checkbox.toggle()
}

renderUI(new WindowsFactory())
console.log('==============================')
renderUI(new MacFactory())