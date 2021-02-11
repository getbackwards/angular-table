// import {Component} from '@angular/core';
import { Component, Renderer2, ViewChild, ViewChildren, ElementRef, QueryList } from '@angular/core';

export interface PeriodicElement {
  number: number;
  date: string;
  site: string;
  with: string;
  dur: number;
  status: string;
  claimNo: number;
  exam: string;
  charge: string;
  invoiced: string;
  paidWo: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    number: 1,
    date: 'Wed 02/12/20 11:30am',
    site: 'Putney',
    with: 'Roy Oven',
    dur: 30,
    status: 'Confirmed',
    claimNo: 1234567,
    exam: 'Yes',
    charge: '$0.00',
    invoiced: '$0.00',
    paidWo: '$0.00',
  },
  {
    number: 2,
    date: 'Wed 02/12/20 11:30am',
    site: 'Putney',
    with: 'Roy Oven',
    dur: 30,
    status: 'Confirmed',
    claimNo: 1234567,
    exam: 'Yes',
    charge: '$0.00',
    invoiced: '$0.00',
    paidWo: '$0.00',
  },
  {
    number: 3,
    date: 'Wed 02/12/20 11:30am',
    site: 'Putney',
    with: 'Roy Oven',
    dur: 30,
    status: 'Confirmed',
    claimNo: 1234567,
    exam: 'Yes',
    charge: '$0.00',
    invoiced: '$0.00',
    paidWo: '$0.00',
  },
  {
    number: 4,
    date: 'Wed 02/12/20 11:30am',
    site: 'Putney',
    with: 'Roy Oven',
    dur: 30,
    status: 'Confirmed',
    claimNo: 1234567,
    exam: 'Yes',
    charge: '$0.00',
    invoiced: '$0.00',
    paidWo: '$0.00',
  },
  {
    number: 5,
    date: 'Wed 02/12/20 11:30am',
    site: 'Putney',
    with: 'Roy Oven',
    dur: 30,
    status: 'Confirmed',
    claimNo: 1234567,
    exam: 'Yes',
    charge: '$0.00',
    invoiced: '$0.00',
    paidWo: '$0.00',
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-component',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  displayedColumns: string[] = [
    'number',
    'date',
    'site',
    'with',
    'dur',
    'status',
    'claimNo',
    'exam',
    'charge',
    'invoiced',
    'paidWo',
  ];
  dataSource = ELEMENT_DATA;

  public elements2:Array<unknown> = [];

  public appendElement():void {
    this.elements2 = [...this.elements2, this.elements2.length + 1]; // Just append anything, since you are not using the values otherwise, appending a generic ID here
 }

 public caller(elementId:number):void {
    console.log('Element', elementId, 'was clicked');
    // Do whatever you want when your appended elements are clicked
 }


  @ViewChild('link') link: ElementRef;

  // @ViewChildren('h') elements:QueryList<ElementRef> 

  // myContainer = document.querySelectorAll("td");
  myContainer = Array.from(document.querySelectorAll('td'));
  // myContainer.forEach((e) => console.log(e));
  
  

  constructor(private renderer: Renderer2) {}
  
  // addElement() {
  //   const a: HTMLParagraphElement = this.renderer.createElement('a');
  //   a.innerHTML = 'edit';
  //   a.setAttribute('href', '#');
  //   a.classList.add('td');
  //   this.renderer.appendChild(this.link.nativeElement, a);
  // }

  addElement() {
    // this.myContainer.forEach((e) => e.parentNode.removeChild(e));
    // this.myContainer.forEach((e) => e.parentNode.removeChild(e));
    this.myContainer.forEach((e) => e.innerHTML = 'edit');
    this.myContainer.forEach((e) => console.log(e));
    // this.innerHTML = 'edit';
    // console.log('hello');
    // console.log(e);
    console.log(this.myContainer);
    // const a: HTMLParagraphElement = this.myContainer.createElement('a');
    // this.myContainer.innerHTML = 'edit';

   this.myContainer.forEach((a) => {
      console.log(a);
    });

    console.log(this.myContainer.entries);
  }

  removeElement() {
    // const a: HTMLParagraphElement = this.renderer.createElement('a');
    // a.innerHTML = 'edit';
    // a.setAttribute('href', '#');
    // this.renderer.appendChild(this.link.nativeElement, a);


    // document.querySelectorAll('.td').forEach((e) => e.parentNode.removeChild(e));
    // console.log('bye');
  }

  students = [
    { id: 1, name: 'Hardik' },

    { id: 2, name: 'Vimal' },

    { id: 3, name: 'Harshad' },
  ];

  clickEvent(e) {
    var id = e.getAttribute('data-id');

    console.log(id);
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
