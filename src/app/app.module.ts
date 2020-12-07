import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtabComponent } from './Employee/etab.component';
import { EmployeeService } from './emp.service';
import { EformComponent } from './Employee/eform.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,EtabComponent,EformComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
