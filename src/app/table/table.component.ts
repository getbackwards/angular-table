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
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
