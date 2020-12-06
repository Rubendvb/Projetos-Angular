import { Component, OnInit } from '@angular/core';
import { GifsService} from '../../service/gifts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifService : GifsService) { }

  q: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifService.getGifs(this.q).subscribe(gifs =>{
        console.log(gifs);
        this.gifs = gifs;
      });
    });
  }

}