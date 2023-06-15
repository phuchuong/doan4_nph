import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public host = environment.BASE_API;

  constructor(private _http: HttpClient, public router: Router) {}

  public post(url: string, obj: any): Observable<any> {
    const body = JSON.stringify(obj);

    let cloneHeader: any = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .post<any>(this.host + url, body, { headers: headerOptions })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  public get(url: string): Observable<any> {
    
    let cloneHeader: any = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new HttpHeaders(cloneHeader);

    return this._http.get(this.host + url, { headers: headerOptions }).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  public put(url: string, obj: any): Observable<any> {
    const body = JSON.stringify(obj);

    let cloneHeader: any = {};
    cloneHeader['Content-Type'] = 'application/json';
    const headerOptions = new HttpHeaders(cloneHeader);
    return this._http
      .put<any>(this.host + url, body, { headers: headerOptions })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  // public delete(url: string,id:any): Observable<any> {
  //   let cloneHeader: any = {};
  //   cloneHeader['Content-Type'] = 'application/json';
  //   const headerOptions = new HttpHeaders(cloneHeader);
  //   return this._http
  //     .delete<any>(this.host + url, { headers: headerOptions })
  //     .pipe(
  //       map((res: any) => {
  //         return res;
  //       })
  //     );
  // }
  public delete(id:any){
     return this._http.delete(this.host + "/"+id);
  }
  // fetchapi(url : string){
  //   this.host.get1(this.post + url)
  // }


}
