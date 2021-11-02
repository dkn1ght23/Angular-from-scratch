import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class BlogService{
  constructor(private httpClient: HttpClient) {

  }

  getAllPost(){
    let url= 'https://jsonplaceholder.typicode.com/posts';
    return this.httpClient.get(url);
  }

  getPostById(postID: string){
    let url='https://jsonplaceholder.typicode.com/posts/' + postID;
    return this.httpClient.get(url);
  }

  getUserById(userID: number){
    let url= 'https://jsonplaceholder.typicode.com/users/' + userID;
    return this.httpClient.get(url);
  }

}
