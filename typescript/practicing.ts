interface IComponent{
    setNext(component: IComponent): IComponent;
    handleEvent(event: string): void;
}

abstract class GUIComponent implements IComponent{
    public nextComponent: IComponent | null = null;

    setNext(component : IComponent){
        this.nextComponent = component;
        return component;
    }

    handleEvent(event: string): void{
        if(this.nextComponent){
            return this.nextComponent.handleEvent(event);
        }
    }
}

class ButtonComponent extends GUIComponent{
    handleEvent(event: string) {
        if(event === 'clickListener'){
            return 'Button: handling '+event+' event';
        }
        return super.handleEvent(event);
    }
}

class InputComponent extends GUIComponent{
    handleEvent(event: string) {
        if(event === 'onChangeListener'){
            return 'Input: handling '+event+' event';
        }
        return super.handleEvent(event);
    }
}

class FormComponent extends GUIComponent{
    handleEvent(event: string) {
        if(event === 'postListener'){
            return 'Form: handling '+event+' event';
        }
        return super.handleEvent(event);
    }
}

const button = new ButtonComponent();
const input = new InputComponent();
const form = new FormComponent();

button.setNext(input).setNext(form)

const events = ['postListener', 'onChangeListener', 'clickListener', 'moveListener'];
events.forEach(event => {
    let result = button.handleEvent(event)
    if(result){
        console.log(result)
    }
    else{
        console.log('The Event dosen\'t belong to any Component')
    }
})