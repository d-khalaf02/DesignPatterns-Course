interface FileSystemComponent{
    getName(): string;
    getSize(): number;
}

class FileGenerator implements FileSystemComponent{
    constructor(private name: string, private size: number){}

    getName(){
        return this.name;
    }

    getSize(){
        return this.size;
    }
}

interface CompositeFileSystemComponent extends FileSystemComponent{
    addComponent(component: FileSystemComponent): void;

    removeComponent(component: FileSystemComponent): void;

    getComponents(): FileSystemComponent[];
}

class Folder implements CompositeFileSystemComponent{
    components: FileSystemComponent[] = []

    constructor(private name: string, private size: number){}

    getName(){
        return this.name;
    }

    getSize(){
        return this.size;
    }

    addComponent(component: FileSystemComponent): void{
        this.components.push(component);
    }

    removeComponent(component: FileSystemComponent): void{
        const index = this.components.indexOf(component);
        if(index !== -1){
            this.components.splice(index, 1);
        }
    }

    getComponents() : FileSystemComponent[]{
        return this.components;
    }
}

let file1 = new FileGenerator('readme.md', 40);
let file2 = new FileGenerator('documentation.txt', 8000);
let file3 = new FileGenerator('init.py', 500);

const folder = new Folder('Python Project', 8540);
folder.addComponent(file1)
folder.addComponent(file2)
folder.addComponent(file3)

console.log(folder)