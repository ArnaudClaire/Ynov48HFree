import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sav',
  templateUrl: './sav.component.html',
  styleUrls: ['./sav.component.css']
})
export class SavComponent {

  constructor(private route:RouterModule) { }

  ngOnInit() {
  }
}
