import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected',
  template: `
        <h1>Protected - you shouldn't be here if not signed in</h1>
    `  
})
export class ProtectedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
