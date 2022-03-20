import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit {
  inputData = `<script>...</script>`

  constructor() { }

  ngOnInit(): void {
  }

}
