interface FilterStrategy{
    apply(image: string): void;
}

class GrayscaleStrategy implements FilterStrategy{
    apply(image: string) {
        console.log(`Applying Grayscale for this image: ${image}`);
    }
}

class SepiaStrategy implements FilterStrategy{
    apply(image: string) {
        console.log(`Applying Sepia for this image: ${image}`);
    }
}

class NegativeStrategy implements FilterStrategy{
    apply(image: string) {
        console.log(`Applying Negative for this image: ${image}`);
    }
}

class ImageProcessor{
    constructor(private strategy: FilterStrategy){}

    changeFilterStrategy(strategy: FilterStrategy){
        this.strategy = strategy;
    }

    applyFilter(image: string){
        this.strategy.apply(image);
    }
}

const imageProcessor = new ImageProcessor(new GrayscaleStrategy());
imageProcessor.applyFilter('strategy.jpg');

imageProcessor.changeFilterStrategy(new SepiaStrategy())
imageProcessor.applyFilter('image.jpg');

imageProcessor.changeFilterStrategy(new NegativeStrategy())
imageProcessor.applyFilter('image3.jpg');