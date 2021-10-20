import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

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
