import { Injectable } from '@angular/core';
import { CustomResponse } from '../interface/custom-response';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private readonly apiUri = 'http://localhost:8081'

  constructor(private http: HttpClient) { }

  items$ = <Observable<CustomResponse>>
  
}
