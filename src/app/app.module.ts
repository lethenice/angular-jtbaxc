import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ListeTagComponent } from './liste-tag/liste-tag.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule, MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ListeTagComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
