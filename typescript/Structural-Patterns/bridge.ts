// Implementation Layer
interface MediaPlayerImplementation{
    playAudio(): void;
    playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
    playAudio() {
        console.log('Playing Audio on Windows...')
    }
    playVideo() {
        console.log('Playing Video on Windows...')
    }
}

class MacMediaPlayer implements MediaPlayerImplementation {
    playAudio() {
        console.log('Playing Audio on Mac OS...')
    }
    playVideo() {
        console.log('Playing Video on Mac OS...')
    }
}

// Abstraction Layer
abstract class MediaPlayerAbstraction{
    constructor(protected implementation: MediaPlayerImplementation){}

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction{
    playFile() {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction{
    playFile() {
        this.implementation.playVideo();
    }
}

const audioPlayer = new AudioPlayer(new WindowsMediaPlayer());
audioPlayer.playFile();

const videoPlayer = new VideoPlayer(new MacMediaPlayer())
videoPlayer.playFile();