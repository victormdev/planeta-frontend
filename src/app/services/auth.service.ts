import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { BehaviorSubject, catchError, first, Observable, tap } from 'rxjs';
import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';
// checar aqui depois -> import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // private url = "https://planeta-api-nodejs.onrender.com/auth";
  // private url = "http://localhost:3000/auth";
  private url = "https://planeta-api-nodejs.vercel.app/auth";

  isUserLoggedIn$ = new BehaviorSubject<boolean>(false);
  private userId!: string;

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  }
  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService, private router: Router) { }

  setUserId(id: string) {
    this.userId = id;
  }

  getUserId(): string {
    return this.userId;
  }
  signup(user: Omit<User, "id">): Observable<User> {
    return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<User>("signup"))
    );
  }

  login(email: Pick<User, "email">, password: Pick<User, "password">): Observable<{token: string, userId: string}> {
    return this.http.post<{token: string, userId: string}>(`${this.url}/login`, {email , password}, this.httpOptions).pipe(
      first(),
      tap((tokenObject: {token: string, userId: string}) => {
        this.userId = tokenObject.userId;
        this.setUserId(tokenObject.userId); // Ajuste aqui
        localStorage.setItem("token", tokenObject.token);
        this.isUserLoggedIn$.next(true);
        this.router.navigate(["/painel"]);
      }),
      catchError(this.errorHandlerService.handleError<{token: string, userId: string}>("login"))
    );
  }
  
  
    // auth.service.ts
  saveDetails(userDetails: any): Observable<any> {
    return this.http.post<any>(`${this.url}/save-details`, userDetails, this.httpOptions).pipe(
      first(),
      catchError(this.errorHandlerService.handleError<any>("saveDetails"))
    );
  }

}
