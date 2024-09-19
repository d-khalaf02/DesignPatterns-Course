interface Tool{
    onMouseUp():void;
    onMouseDown():void;
}

class SelectionTool implements Tool{
    onMouseUp() {
        console.log("Selection: onMouseUp");
    }
    onMouseDown() {
        console.log("Selection: onMouseDown");
    }
}

class BrushTool implements Tool{
    onMouseUp() {
        console.log("Brush: onMouseUp");
    }
    onMouseDown() {
        console.log("Brush: onMouseDown");
    }
}

class EraserTool implements Tool{
    onMouseUp() {
        console.log("Eraser: onMouseUp");
    }
    onMouseDown() {
        console.log("Eraser: onMouseDown");
    }
}

class Canvas{
    constructor(private tool: Tool){}

    setTool(tool: Tool){
        this.tool = tool;
    }
    onMouseUp(){
        this.tool.onMouseUp();
    }
    onMouseDown(){
        this.tool.onMouseDown();
    }
}

const canvas = new Canvas(new SelectionTool());

const brushTool = new BrushTool();
const eraserTool = new EraserTool();

canvas.onMouseUp();
canvas.onMouseDown();

canvas.setTool(brushTool);
canvas.onMouseUp();
canvas.onMouseDown();

canvas.setTool(eraserTool);
canvas.onMouseUp();
canvas.onMouseDown();
