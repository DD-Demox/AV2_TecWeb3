import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { Cat } from './model/Cat';

@Injectable({
  providedIn: 'root'
})
export class CatApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl= 'https://freetestapi.com/api/v1/cats'
  
  httpOptions = {
    headers : new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getCats(): Observable<Cat>{
    return this.http.get<Cat>(this.baseurl).pipe(retry(1),catchError(this.errorHandl));
  }
  errorHandl(error:any){
    let errorMessage = ''
    // o erro está vindo do front
    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      // erro que veio da API
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(() => {
      return errorMessage
    })
  }
}
