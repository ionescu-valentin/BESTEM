import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bestem';

  constructor(
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
      this.toastrService.success('hello');
  }
}
