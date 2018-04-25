import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { CentroDeSalud } from '../model/centro-de-salud';

@Injectable()
export class CentrosDeSaludService {
  apiUrl = 'http://200.0.236.210/AresAPI/api/';

  constructor(private httpClient: HttpClient) { }

  getCentrosDeSalud(): Observable<CentroDeSalud[]> {

    // debugger;
    console.log('llego al getCentrosDeSalud');

    const x: Observable<CentroDeSalud[]> = this.httpClient.get<CentroDeSalud[]>(this.apiUrl + 'CentroDeSalud');

    return x;
    // .pipe(
    //   catchError(this.handleError('getCSs', []))
    // );
  }


  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {

  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     // this.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

}
