import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  nome: string = 'Rubén';
  idade: string = '28';
  nacionalidade: string = 'Venezuelana';
  cidade: string = 'Rio de Janeiro';
  gosto: string = 'Futebol';
  img: string = './assets/ruben.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
