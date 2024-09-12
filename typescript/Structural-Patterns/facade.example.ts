class Amplifier{
    turnOn(): void{
        console.log('turning on the amplifier...');
    }
    setVolume(volume: number): void{
        console.log('setting volume on level', volume);
    }
}

class DVDPlayer{
    turnOn(){
        console.log('turning on the DVD player...');
    }
    play(movie: string){
        console.log('playing movie ' + movie +'...');
    }
}

class Projector{
    turnOn() {
        console.log('turning on the Projector...');
    }
    setInput(dvdPlayer: DVDPlayer){
        console.log('set input player', dvdPlayer);
    }
}

class Lights{
    dim(level: number){
        console.log('dim level', level);
    }
}

class HomeTheaterFacade{
    constructor(
        private amplifier: Amplifier,
        private dvdPlayer: DVDPlayer,
        private projector: Projector,
        private lights: Lights,
    ){}

    watchMovie(movie: string, volume: number, level: number){
        console.log('=========================')
        this.amplifier.turnOn();
        this.amplifier.setVolume(volume);

        this.dvdPlayer.turnOn();


        this.projector.turnOn();
        this.projector.setInput(this.dvdPlayer);

        this.lights.dim(level)
        this.dvdPlayer.play(movie);
    }
}
const amplifier = new Amplifier();
const dvdPlayer = new DVDPlayer();
const projector = new Projector();
const lights = new Lights();

const homeTheater = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);
homeTheater.watchMovie("Movie1", 20, 30)