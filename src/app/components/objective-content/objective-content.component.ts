import { Component, OnInit } from '@angular/core';
import { AcessibilityBarComponent } from '../acessibility-bar/acessibility-bar.component';
@Component({
  selector: 'app-objective-content',
  templateUrl: './objective-content.component.html',
  styleUrls: ['./objective-content.component.css']
})
export class ObjectiveContentComponent implements OnInit {

  public divsArray = document.getElementsByTagName('div');
  public psArray = document.getElementsByTagName('p');
  public hsArray = document.getElementsByTagName('h1');
  public h2sArray = document.getElementsByTagName('h2');
  public asArray = document.getElementsByTagName('a');
  public ulsArray = document.getElementsByTagName ('ul');

  constructor (private acessibilityBarComponent: AcessibilityBarComponent) {}

  ngOnInit(): void {    
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
  }
}
