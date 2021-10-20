import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    const url = "http://portfolio-dotnet.herokuapp.com/api/v1/biodata/6";
    return this.httpClient.get(url);
  }
}
