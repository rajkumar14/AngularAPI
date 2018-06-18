import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
    id: number;
    Name: string;
    email: string;
    address: string;
  constructor(private http: HttpClient) { }
  registerNewUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/student/', userData);
  }
  getUser(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/student/');
  }
  deleteStudent(id: number) {
    return this.http.delete('http://127.0.0.1:8000/student/' + id + '/');
  }
  editStudent(id: number) {
    return this.http.get('http://127.0.0.1:8000/student/' + id + '/');
  }
}
