import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/todos/');
  }
  updateData(data,id){
    console.log(id);
    return this.http.patch('https://jsonplaceholder.typicode.com/todos/'+id,data)
  }
  deleteData(id){
    return this.http.delete('https://jsonplaceholder.typicode.com/todos/'+id)
  }
}
