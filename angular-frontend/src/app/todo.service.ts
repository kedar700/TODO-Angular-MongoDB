import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type','application/json')
    headers.append('Authorization','Basic ' + btoa("user:password")); 
  }

  getTodos():  Promise<Todo[]> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    console.log(headers);
    return this.http.get(this.baseUrl + '/api/todos/',{headers: headers})
      .toPromise()
      .then(response => response.json() as Todo[])
      .catch(this.handleError);
  }

  createTodo(todoData: Todo): Promise<Todo> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(this.baseUrl + '/api/todos/', todoData,{headers:headers})
      .toPromise().then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  updateTodo(todoData: Todo): Promise<Todo> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(this.baseUrl + '/api/todos/' + todoData.id, todoData,{headers:headers})
      .toPromise()
      .then(response => response.json() as Todo)
      .catch(this.handleError);
  }

  deleteTodo(id: string): Promise<any> {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.delete(this.baseUrl + '/api/todos/' + id,{headers:headers})
      .toPromise()
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  }
}