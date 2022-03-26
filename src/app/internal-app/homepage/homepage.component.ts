import { Component, OnInit } from '@angular/core';
import { Modals } from 'src/app/_core/constants/Modals';
import { ModalsService } from 'src/app/_core/services/modals.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(
    private modalService: ModalsService,
  ) { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalService.openModal(Modals.TEST_MODAL);
  }

}
