import { Component, OnInit } from '@angular/core';
import { DetailsService } from 'src/app/services/details.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor( private _detailservice : DetailsService) { }

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
