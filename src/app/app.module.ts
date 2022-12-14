import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';

import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import { Tabledata1Component } from './shared/components/tabledata1/tabledata1.component';
import { HelloComponent } from './hello.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CategoryComponent } from './pages/category/category.component'; 
import { Tabledata2Component } from './shared/components/tabledata2/tabledata2.component';


const appRoutes: Routes = [
  { path: 'department', component: DepartmentComponent },
  { path: 'category', component: CategoryComponent },
  
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  
];


@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule,HttpClientModule,TableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
   ],
  declarations: [ AppComponent,Tabledata1Component, HelloComponent,DepartmentComponent,Tabledata2Component ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
