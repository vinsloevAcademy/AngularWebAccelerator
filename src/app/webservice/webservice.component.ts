import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-webservice',
  templateUrl: './webservice.component.html',
  styleUrls: ['./webservice.component.css']
})
export class WebserviceComponent implements OnInit {
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    return this.http.get('you url here', {headers: this.headers});
  }

}
