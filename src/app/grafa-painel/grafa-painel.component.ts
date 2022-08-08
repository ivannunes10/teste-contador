import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatTableDataSource } from '@angular/material/table'

import {DashDescriptionService} from '../dash-description.service'

@Component({
  selector: 'app-grafa-painel',
  templateUrl: './grafa-painel.component.html',
  styleUrls: ['./grafa-painel.component.css']
})
export class GrafaPainelComponent implements OnInit {

  public id: string;
  public description = []
  public url: string
  public uid: string
  public title: string
  public source: string 
  public separator: number
  public separator2: number
  public length: number
  safeSrc: SafeResourceUrl;
  public iframe

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private DetailsGrafana:DashDescriptionService,) {
    
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.separator = this.id.indexOf("&")
    this.separator2 = this.id.indexOf("@@")
    this.url = this.id.slice(this.separator2 + 4, this.separator)
    this.uid = this.id.slice(0, this.separator2)
    this.title = this.id.slice(this.separator + 1, this.id.length)
    this.source = "https://34b4-143-107-167-161.sa.ngrok.io/d" + this.url + "?orgId=1" + "&kiosk=true"
    //this.source = "http://localhost:3000/d" + this.url + "?orgId=1" + "&kiosk=true"
    this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl(this.source)

    this.DetailsGrafana.getDescription(this.uid).subscribe(data=>{
      this.description.push(data)
    })
    document.title = this.title
    
    
  }
  



}
