import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private getserv:HttpClient) { }
public makerequest(){
return this.getserv.get('https://api.thecatapi.com/v1/images/search')

}
}
