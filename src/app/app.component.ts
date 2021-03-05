import { Component, OnDestroy, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'factafrica';

  constructor() { }

  ngOnInit(): void { }

  ngOnDestroy(): void { }

}
