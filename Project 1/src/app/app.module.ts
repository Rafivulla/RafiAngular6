import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { BindingtwoComponent } from './bindingtwo/bindingtwo.component'


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    BindingtwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
