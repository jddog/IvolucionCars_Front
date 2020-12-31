import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-datenow',
  templateUrl: './datenow.component.html',
  styleUrls: ['./datenow.component.scss'],
})
export class DatenowComponent implements OnInit {
  dateTimeNow: string;

  constructor(private _sharedService: SharedService) {}

  ngOnInit(): void {
    this._sharedService.getHourNow().then((resp) => {
      this.dateTimeNow = resp;
    });
  }
}
