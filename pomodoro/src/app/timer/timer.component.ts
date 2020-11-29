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
  
  tasks = [];
    
  task: any = {};

  addTask():void {
    this.tasks.push(this.task);
  }

  editTask() {

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