import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StackItem from '../Interfaces/StackItem-interface';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly mainApiUrl: string = 'https://localhost:5001/api/MyStack';

  constructor(
    private http: HttpClient
  ) { }

  peek(): Observable<string> {
    return this.http.get<string>(`${this.mainApiUrl}/peek`);
  }

  pop(): Observable<string> {
    return this.http.get<string>(`${this.mainApiUrl}/pop`);
  }

  push(textObj: StackItem) {
    return this.http.post(`${this.mainApiUrl}/push`, textObj);
  }
}
