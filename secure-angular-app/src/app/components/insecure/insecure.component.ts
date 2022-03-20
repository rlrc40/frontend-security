import { Component, OnInit } from '@angular/core';

const dangerousUserInput = `
  <img src="" onError="javascript:alert('Very very malicious code')"/>
`;

@Component({
  selector: 'app-insecure',
  template: `
    <div>
      <h1>INSECURE COMPONENT</h1>
      ${dangerousUserInput}
    </div>
  `,
  styleUrls: ['./insecure.component.scss']
})
export class InsecureComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
