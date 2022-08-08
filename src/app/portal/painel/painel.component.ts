import { Component, ElementRef, HostListener, OnChanges, OnInit, ViewChild } from '@angular/core';
import { IPainel } from '../models/painel.model';
import { Serie } from '../models/serie.model';
import { Observable, of } from 'rxjs';
import { Location, ViewportScroller } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { PrintService } from '../services/print.service';
import { filter } from 'rxjs/operators';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit, OnInit, OnChanges {

  public titulo = 'Titulo';
  public painel: IPainel;

  constructor(private location: Location, private route: ActivatedRoute, private printService: PrintService,
              private router: Router, private scroll: ViewportScroller) { }
  
  @HostListener('document:keydown', ['$event']) //Teclas de atalho
  onKeyDown(e: KeyboardEvent){
    let map = {};
    map[e.keyCode] = e.type == 'keydown';

    if ((e.altKey && map[49]) || (e.altKey && map[49] && e.shiftKey) || (e.shiftKey && map[49] && map[27])){
      document.getElementById("irConteudo").click();
    } else if ((e.altKey && map[50]) || (e.altKey && map[50] && e.shiftKey) || (e.shiftKey && map[50] && map[27])){
      document.getElementById("irMenu").click();
    } else if ((e.altKey && map[52]) || (e.altKey && map[52] && e.shiftKey) || (e.shiftKey && map[52] && map[27])){ 
      document.getElementById("irContraste").click();
    } else if ((e.altKey && map[53]) || (e.altKey && map[53] && e.shiftKey) || (e.shiftKey && map[53] && map[27])){    
      document.getElementById("irAcessibilidade").click();
    } else if ((e.altKey && map[54]) || (e.altKey && map[54] && e.shiftKey) || (e.shiftKey && map[54] && map[27])){
      this.scroll.scrollToPosition([0, document.body.scrollHeight]);
      console.log("Rodapé");
    }
  }

  ngOnInit() {
    this.painel = this.route.snapshot.data.painel;
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const mainHeader = document.getElementById('titulo-valor')
      if (mainHeader) {
        (mainHeader as HTMLElement).focus();
      }
    });
    document.title = this.painel.titulo
  }

  ngOnChanges(e){
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      const mainHeader = document.getElementById('titulo-valor')
      if (mainHeader) {
        (mainHeader as HTMLElement).focus();
        (mainHeader as HTMLElement).click();
      }
    });
  }

  onPrintPainel() {
    this.printService.printDocument('paineis', this.painel.id);
  }

  toObservable(series: Serie[]): Observable<any[][]> {
    return of(series.map(serie => Serie.toArray(serie)));
  }

  voltarNavegacao() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onKeyPressCor(e: KeyboardEvent){
    if(e.keyCode == 13){
      this.voltarNavegacao();
    }
  }

}

