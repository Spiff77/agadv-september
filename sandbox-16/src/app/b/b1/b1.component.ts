import { Component, HostListener, OnInit } from '@angular/core';
import { NameService } from '../../name.service';

@Component({
  selector: 'app-b1',
  templateUrl: './b1.component.html',
  styleUrls: ['./b1.component.scss'],
  providers: [NameService]
})
export class B1Component {
  thecolor: any;

  constructor(public ns: NameService) {
  }

  @HostListener('click')
  changeName() {
    this.ns.name = 'Gael avec trema'
  }

}
