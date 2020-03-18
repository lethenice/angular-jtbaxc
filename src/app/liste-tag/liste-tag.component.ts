import { Component, OnInit } from '@angular/core';
import {FormControl}  from '@angular/forms';

export interface Tag {
  name: string;
}

const ELEMENT_DATA: Tag[] = [
  {name: '1Hydrogen'},
  {name: '2Hydrogen'},
  {name: '3Hydrogen'},
  {name: '4Hydrogen'},
  {name: '5Hydrogen'}
];

@Component({
  selector: 'app-liste-tag',
  templateUrl: './liste-tag.component.html',
  styleUrls: ['./liste-tag.component.css']
})

export class ListeTagComponent implements OnInit {

  constructor() { }

  listeTag = ELEMENT_DATA;
  displayListeTagColumn = ['name'];
  myControl = new FormControl();

  ngOnInit() {
  }

}