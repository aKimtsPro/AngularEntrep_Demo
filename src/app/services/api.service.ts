import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly BASE_URL = 'https://jsonplaceholder.typicode.com/'

  constructor(private client: HttpClient) { }

  getPosts(next?: (next: Object) => void )  {
    const obs = this.client.get(this.BASE_URL + 'posts', { observe: 'response' });
    obs.subscribe(next, (error) => console.error("echec GET /posts", error), () => console.log('COMPLETED'));
  }

  postPost( post: Post ): Observable<Post> {
    return <Observable<Post>> this.client.post(this.BASE_URL+'posts', post); // as Observable<Post>; fait la même chose
  }
}
