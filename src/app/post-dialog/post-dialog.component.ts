//Handling the get title and body

//Decorators marks a class as an Angular, provides configuration metadata
//dependency parameter of a class constructor
import { Component, Inject } from '@angular/core'
//Reference to a dialog opened via the MatDialog service
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FormControl, FormGroup, Validators } from '@angular/forms';

import Post from '../models/Post'

@Component({
  selector: 'new-post-dialog',
  templateUrl: 'post-dialog.component.html',
  styleUrls: ['post-dialog.component.scss']
})
export class PostDialogComponent {

  post: Post = {
    userId: 999,
    title: null,
    body: null,
    id: null
  }

  postForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<PostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
    if (data.post)
      this.post = {...data.post}
  }

  ngOnInit() {
    this.postForm = new FormGroup({
      'title': new FormControl(this.post.title, [
        Validators.required,//fild required
        Validators.minLength(10),//requiring a minimal lenght
      ]),
      'body': new FormControl(this.post.body, [
        Validators.required//fild required
      ])
    })
  }

  get title() { return this.postForm.get('title') }

  get body() { return this.postForm.get('body') }

  cancel() {
    this.dialogRef.close()
  }

  onSubmit() {
    this.dialogRef.close(({...this.post, ...this.postForm.value}))
  }
}