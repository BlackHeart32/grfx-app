import { Injectable } from '@angular/core';
import { catchError, Observable, Subscriber, tap, throwError } from 'rxjs';
import { CustomResponse } from '../interface/custom-response';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Item } from '../interface/item';
import { Status } from '../enum/status.enum';
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly apiUri = 'http://localhost:8081'

  constructor(private http: HttpClient) { }

  items$ = <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUri}/item/list`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    )

    register$ = (item: Item) => <Observable<CustomResponse>>
    this.http.get<CustomResponse>(`${this.apiUri}/item/register`)
    .pipe(
      tap(console.log),
      catchError(this.handleError)
    )

    filter$ = (status: Status, response: CustomResponse) => <Observable<CustomResponse>>
      new Observable<CustomResponse>(
        subscriber => {
          console.log(response)
          subscriber.next(
            status === Status.ALL ? {...response, message: `Items filtered by ${status} status`}
            : {...response, message: response.data.items
            .filter(item => item.status === status).length > 0 ? `Items filtered by ${status ===}`}
          )
        }
      )

    private handleError(error: HttpErrorResponse): Observable<never>{
      console.log(error)
      return throwError (`An error has occurred - Error code: ${error.status}`)
    }
  //EOF
}
