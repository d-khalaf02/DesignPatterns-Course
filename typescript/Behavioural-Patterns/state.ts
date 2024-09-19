interface LightState{
    switchState(lightSwitch: LightSwitch): void;
}

class OnState implements LightState{
    switchState(lightSwitch: LightSwitch) {
        console.log('Light state is On. Turning Off...')
        lightSwitch.setState(new OffState())
    }
}

class OffState implements LightState{
    switchState(lightSwitch: LightSwitch) {
        console.log('Light state is Off. Turning On...')
        lightSwitch.setState(new OnState())
    }
}



class LightSwitch{
    constructor(private state: LightState){}

    setState(state: LightState): void{
        this.state = state;
    }

    press(): void{
        this.state.switchState(this)
    }
}

const lightSwitch = new LightSwitch(new OnState());

lightSwitch.press();
lightSwitch.press();