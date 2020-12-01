import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  title: string = 'Timer';
  minutos: number;
  segundos: number;
  
  tarefas = [];
    
  item: any = '';
  ocultarLista: boolean = true;
  ocultarEdit: boolean = true;

  aggTarefa():void {
    this.ocultarLista = false;
    this.tarefas.push(this.item);
    this.item = ''
  }

  editTarefa():void {

  }

  deletTarefa(i) {
    //this.tarefas.splice(this.tarefas.indexOf(tarefa), 1);
    var resposta = confirm('Deseja eliminar tarefa?');
    if (resposta) {
      this.tarefas.splice( i, 1)
    }
  }
  

  constructor() {
    this.contar();
    setInterval(()=> this.tick(), 1000);
  }

  contar(): void {
    this.minutos = 25;
    this.segundos = 0;
  }


  private tick(): void {
    if(--this.segundos < 0) {
      this.segundos = 59;
      if(--this.minutos < 0) {
        this.minutos = 24;
        this.segundos = 59;
      }
    }
  }
  ngOnInit(): void {
  }

}