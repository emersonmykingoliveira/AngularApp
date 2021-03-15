import { Injectable } from '@angular/core';
//import HttpClient and HttpHeaders
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import the RxJS observable(emits the requested data when the response is received)
import { Observable } from 'rxjs';

import Post from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //RESTful api resource
  baseUrl: string = 'https://jsonplaceholder.typicode.com'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  }

  constructor(private http: HttpClient) { }

  //RESTful api functions
  getPosts() {
    return this.http.get(`${this.baseUrl}/posts`)
  }

  getUsers() {
    return this.http.get(`${this.baseUrl}/users`)
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<any>(`${this.baseUrl}/posts`, post, this.httpOptions)
  }

  deletePost(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.baseUrl}/posts/${id}`)
  }

  editPost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/posts/${post.id}`, post, this.httpOptions)
  }
}
