import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Injectable, OnInit} from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { BehaviorSubject, range } from 'rxjs';
import { take, first } from 'rxjs/operators';
import { IPainel } from '../models/painel.model';
import { PainelService } from '../services/painel.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { A11yModule } from '@angular/cdk/a11y';

import {GrafanaDashsService} from '../../grafana-dashs.service'
import {DashDescriptionService} from '../../dash-description.service'

@Component({
  selector: 'app-portal',
  template: `Number of ticks: {{numberOfTicks}}`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss', './portal.component.css']
})
export class PortalComponent implements OnInit {

  numberOfTicks = 0;

  public divsArray = document.getElementsByTagName('div');
  public psArray = document.getElementsByTagName('p');
  public hsArray = document.getElementsByTagName('h1');
  public asArray = document.getElementsByTagName('a');
  public ulsArray = document.getElementsByTagName ('ul');
  public h2sArray = document.getElementsByTagName('h2');

  public paineis: IPainel[];
  public paineisDataSource = new MatTableDataSource<IPainel>();
  public data$: BehaviorSubject<any> = new BehaviorSubject([]);
  public classe = 'big';
  public dataGrafana: any
  public detailsGrafana: any
  public multipleDetails = []
  public toRenderData = []

  constructor(private location: Location, private painelService: PainelService,
     private scroll: ViewportScroller, 
     private router: Router, 
     private GrafanaDashs:GrafanaDashsService, 
     private DetailsGrafana:DashDescriptionService,
     private ref: ChangeDetectorRef ) {

      this.GrafanaDashs.getData().subscribe(data=>{
        this.dataGrafana = data
        if (data){
          for (let i = 0; i < this.dataGrafana.length; i++){
            if (data[i] != undefined){
              this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data2=>{
                //if (data2.meta.isFolder != true){
                  this.multipleDetails.push(data2)
                //}
                //this.multipleDetails.push(data2)
              })    
              //this.multipleDetails.push(row)
              console.log(this.multipleDetails)
            }
          }
        }
      })

      setInterval(() => {
        this.numberOfTicks++;
        this.ref.markForCheck();
      }, 3000);


    }

  async ngOnInit() {
    
    document.title = "Observatório Municipal da Pessoa com Deficiência"

    var bench = document.getElementById('bench')
    if (bench.style.backgroundColor === 'black') {
      for (let div of this.divsArray){
        if (div.className != 'donotchange' &&
        div.className != 'content' &&
        div.className != 'mat-card-header-text' &&
        div.className != 'descricao' &&
        div.className != 'autor' &&
        div.className != 'tema' &&
        div.className != 'mat-form-field-prefix ng-tns-c49-0 ng-star-inserted' &&
        div.className != 'content' &&
        div.className != 'mat-form-field-flex ng-tns-c49-0' &&
        div.className != 'big pesquisa' && 
        div.className != 'mat-form-field-wrapper ng-tns-c49-0' &&
        div.className != 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' &&
        div.className != 'mat-form-field-infix ng-tns-c49-0' &&
        div.className != 'sem-resposta' &&
        div.className != 'lista-paineis' &&
        div.className != 'mat-form-field-wrapper ng-tns-c107-0' &&
        div.className != 'mat-form-field-infix ng-tns-c107-0' &&
        div.className != 'mat-form-field-prefix ng-tns-c107-0 ng-star-inserted' &&
        div.className != 'mat-form-field-flex ng-tns-c107-0' &&
        div.className != 'mat-form-field-flex ng-tns-c107-4' &&
        div.className != 'mat-form-field-prefix ng-tns-c107-1 ng-star-inserted' &&
        div.className != 'ng-tns-c107-1' &&
        div.className != 'mat-form-field-flex ng-tns-c107-2' &&
        div.className != 'big pesquisa'
        ){
          div.style.backgroundColor = 'black';
          div.style.color = 'white';         
        }
        if (div.className === 'big pesquisa' ||
        div.className === 'mat-form-field-wrapper ng-tns-c49-0' ||
        div.className === 'mat-form-field-underline ng-tns-c49-0 ng-star-inserted' ||
        div.className === 'mat-form-field-infix ng-tns-c49-0'){
          div.style.backgroundColor = 'white';
          div.style.color = 'black'; 
        }
        if (div.className === "footer-basic") {
          div.style.backgroundColor = 'white'
        }
        if (div.className === 'img') {
          div.style.backgroundColor = 'white';
          div.style.border = '2px solid #000' 
        }
      }
      for (let p of this.psArray){
        if (p.className != 'donotchange'){
          p.style.backgroundColor = 'black';
          p.style.color = 'white';
          p.style.boxShadow = '0 0 0 2px #000';   
          p.style.border = '2px solid #ffeb3b' 
        }
      }
      for (let h of this.hsArray){
        if (h.className != 'donotchange'){
          h.style.backgroundColor = 'black';
          h.style.color = 'white';
          h.style.boxShadow = '0 0 0 2px #000'; 
          h.style.border = '2px solid #ffeb3b'
        }
      }
      for (let h2 of this.h2sArray){
        if (h2.className != 'donotchange'){
          h2.style.backgroundColor = 'black';
          h2.style.color = 'white';
          h2.style.boxShadow = '0 0 0 2px #000'; 
          h2.style.border = '2px solid #ffeb3b'  
        }
      }
      // for (let a of this.asArray){
      //   if (a.className != 'donotchange' && 
      //   a.className != 'hover' && 
      //   a.className != 'hover2'){
      //     a.style.backgroundColor = 'black';
      //     a.style.color = 'white';
      //     a.style.boxShadow = '0 0 0 2px #000';
      //     a.style.border = '2px solid #ffeb3b'
      //     if(a.className === 'fontsize') {
      //       a.classList.remove('fontsize');
      //       a.classList.add('fontsize2');
      //       a.style.boxShadow = '0 0 0 2px #000';
      //       a.style.border = '2px solid #ffeb3b'
      //     }     
      //   } else if (a.className === 'hover2'){
      //     a.classList.remove('hover2');
      //     a.classList.add('hover3');
      //     a.style.boxShadow = '0 0 0 2px #000';
      //     a.style.border = '2px solid #ffeb3b'
      //   } else if (a.className === 'hover') {
      //     a.style.boxShadow = '0 0 0 2px #000';
      //     a.style.border = '2px solid #ffeb3b'
      //   }
      // }
      for (let ul of this.ulsArray){
        if (ul.id === 'atalhos'){
          ul.style.backgroundColor = 'black';
        }
      }
    } 


    this.paineis = (await this.painelService.getPaineis().pipe(first()).toPromise());
    this.paineisDataSource.data = this.paineis;
    // this.paineisDataSource.filterPredicate = (data: IPainel, filter: string) => {
    //   return data.titulo == filter || data.tema == filter;
    // }
    this.paineisDataSource.filterPredicate = (d: IPainel, filter: string) => {
      const textToSearchTi = d['titulo'] && d['titulo'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
      const textToSearchTe = d['tema'] && d['tema'].normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() || '';
      return textToSearchTi.indexOf(filter) !== -1 || textToSearchTe.indexOf(filter) !== -1;
    };
  }

  applyFilter(event: Event) { 
    const filterValue = (event.target as HTMLInputElement).value;
    this.paineisDataSource.filter = filterValue.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    if (filterValue !== '') {
      this.classe = 'small';
    } else {
      this.classe = 'big';
    }
  }

  voltarNavegacao() {
    this.location.back();
  }

  //loadDescription(){
  //  if (this.dataGrafana){
  //    for (let i = 0; i < this.dataGrafana.length; i++){
  //      if (this.dataGrafana[i] != undefined){
  //        var row = []
  //        row.push(this.dataGrafana[i].title)
  //        row.push(this.dataGrafana[i].url)
  //        row.push(this.dataGrafana[i].uid)
  //        this.DetailsGrafana.getDescription(this.dataGrafana[i].uid).subscribe(data=>{
  //          row.push(data)
  //        })    
  //        console.log("ROW", row)
  //        this.multipleDetails.push(row)
  //        row = []
  //      }
  //    }
  //    //console.log(this.multipleDetails)
  //  }
  //}

  irPainel(e: KeyboardEvent){
    document.getElementById(document.activeElement.id).click();
  }

  @HostListener('document:keydown', ['$event']) //Teclas de atalho
  onKeyDown(e: KeyboardEvent){
    let map = {};
    map[e.keyCode] = e.type == 'keydown';

    if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])){
      document.getElementById("irConteudo").click();
    } else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])){
      document.getElementById("irMenu").click();
    }else if ((e.altKey && map[51]) || (e.altKey && map[51] && e.shiftKey) || (e.shiftKey && map[51] && map[27])){    
      document.getElementById("irBusca").click();
    } else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])){ 
      document.getElementById("irContraste").click();
    } else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])){    
      document.getElementById("irAcessibilidade").click();
    } else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])){
      this.scroll.scrollToPosition([0, document.body.scrollHeight]);
    }
  }
}
