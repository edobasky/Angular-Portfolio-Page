import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private _detailservice: DetailsService) { }

  bioData: any = {};

  ngOnInit(): void {
    this._detailservice.getData().subscribe(
      data => {
        this.bioData = data;
        console.log(data);
      }
    )
  }

}
