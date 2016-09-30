import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuandlService {
  endpoint_url:String = "https://www.quandl.com/api/v3/datasets/";

  constructor(private http: Http){

  }
}
