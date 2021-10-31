import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class BlogService{
  constructor(private httpClient: HttpClient) {

  }

  getAllPost(){
    let url="https://jsonplaceholder.typicode.com/posts";
    return this.httpClient.get(url);
  }

}
