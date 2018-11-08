import { Component, OnInit } from '@angular/core';
import {DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-datasiswa',
  templateUrl: './datasiswa.component.html',
  styleUrls: ['./datasiswa.component.css'],
  providers:[DataserviceService]
})
export class DatasiswaComponent implements OnInit {
  title: string;
  mtk: string;
  number: number;
  number2: number;
  nama: string;
  datalist;
  id: string;
  constructor(private _dataservice:DataserviceService) {
    this.title = 'Testing'
  }
  edit(data)
  {
    this.nama = data.title
    this.id = data.id
  }
  update(){
    let data={
    "title" : this.nama
    }
  let id = this.id;
  this._dataservice.updateData(data,id).subscribe(val =>{
    alert(this.nama+' Berhasil di update');
  })
}

  delete(data){
    let id = data.id
    let title = data.title
    this._dataservice.deleteData(id).subscribe(val =>{
      alert("delete  (" +title+")  Berhasil");
      this.ngOnInit()
    })
  }

  ngOnInit() {
    this.getData()
  }
  getData(){
    this._dataservice.getData().subscribe(val =>{
      this.datalist = val
    })
  }
}
