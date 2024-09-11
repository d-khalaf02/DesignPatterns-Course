
interface PostCreator{
    createPost(): void;
}

interface PostCommenter{
    addCommentToPost(comment: string): void;
}

interface PostSharer{
    sharePost(): void;
}

class Admin implements PostCreator, PostCommenter, PostSharer{
    createPost() {
        console.log("CreatingPosts...");
    }

    addCommentToPost(comment: string) {
        console.log("Commenting on Posts...");
    }

    sharePost() {
        console.log("Shareing Posts...");
    }
}
class User implements PostCommenter, PostSharer{
    addCommentToPost(comment: string) {
        console.log("Commenting '" + comment + "' on Posts...");
    }

    sharePost() {
        console.log("Shareing Posts...");
    }
}

const admin = new Admin();
admin.createPost();
admin.addCommentToPost("Admin commenting on the Post...");
admin.sharePost();

console.log('=============================================')
const user = new User();
user.addCommentToPost("User commenting on the Post...");
user.sharePost();