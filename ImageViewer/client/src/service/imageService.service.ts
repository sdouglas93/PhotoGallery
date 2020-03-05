import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';
//import 'rxjs/add/operator/map';  
//import 'rxjs/add/operator/catch';  
//import 'rxjs/add/observable/throw';  
@Injectable()  
export class ImageService {  
    myAppUrl: string = "";  
    constructor(private _http: HttpClient, @Inject('BASE_URL') baseUrl: string) {  
        this.myAppUrl = baseUrl;  
    }  

    getImages(): Observable<any>
    {  
        return this._http.get(this.myAppUrl + 'api/Values/GetAllImages')
            .pipe(catchError(this.errorHandler))
           // .pipe(map(response: Response) => response.json())  
    }  

    getFilteredImages(width: number, height: number): Observable<any> {
       return this._http.get(this.myAppUrl + "api/Values/GetFilteredImages/" + width +"/"+ height)
       .pipe(catchError(this.errorHandler))
    }

    errorHandler(error: Response) 
    {
      console.log(error);
      return throwError(error);
    }
   
}