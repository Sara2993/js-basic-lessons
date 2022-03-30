import { Component } from '@angular/core';

@Component({
  selector: 'my-root',//should in kebab style
 templateUrl: './app.component.html',
  // template:'<h1>inline HTML content</h1>',
 // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demoa-app';
  location='chennai';
  onBoxValueChange(paramData:any){
    console.log("app component:" + paramData.value);
  }
}
