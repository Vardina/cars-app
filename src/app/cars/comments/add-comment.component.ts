import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { Comment } from '../car';

@Component({
   selector: 'add-comment',
   templateUrl: './add-comment.component.html',
   styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
     comment: Comment = new Comment();

    addComment() {
        document.getElementById('user-comment').style.display = 'block';
        document.getElementById('comment-form').style.display = 'none';
    }

    editComment() {
        document.getElementById('comment-form').style.display = 'block';
    }
}
