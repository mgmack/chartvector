import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuandlService {
  endpoint_url:string = "https://www.quandl.com/api/v3/datasets/";
  url_query_string:string = ".json?api_key=";
  quandl_api_key:string = "1oC8WM9amPy7r5xsctjr";
  zillow_path:string = "ZILL/";

  constructor(private http: Http){

  }

  getZillowData( area:string, areacode:string, indicator:string ) {
    /* for documentation, see https://www.quandl.com/data/ZILL/documentation/documentation */
    return this.http.get(
      this.endpoint_url +
      this.zillow_path +
      area + areacode + "_" + indicator +
      this.url_query_string +
      this.quandl_api_key
    ).map(res => res.json());
  }

}
