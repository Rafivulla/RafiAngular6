import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.less']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  interpolationText ="interpolation Text Result";
  PropertyBindingsrc ="https://angular.io/assets/images/logos/angular/angular.svg";
  mainTitle ="Data Binding"

}
