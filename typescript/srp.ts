

class BlogPost {
    private title: string;
    private content: string;

    get getInfos(){
        return {title: this.title, content: this.content};
    }
    constructor(title: string, content: string) {
        this.title = title;
        this.content = content;
    }

    // Methods related to content management
    createPost() {
        // Implementation here
    }

    updatePost() {
        // Implementation here
    }

    deletePost() {
        // Implementation here
    }


}



class BlogPostDisplayer {
    private title: string;
    private content: string;
    constructor(private blog: BlogPost) {
        const blogInfos = this.blog.getInfos;

        this.title = blogInfos.title;
        this.content = blogInfos.content;
    }
    // Method related to post display
    display() {
        return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}

const blog = new BlogPost("hello world", "blog's content");