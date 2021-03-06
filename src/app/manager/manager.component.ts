import { Component, OnInit } from '@angular/core'
import { MediaObserver } from '@angular/flex-layout'

@Component({
  selector: 'app-manager',
  template: `
    <mat-toolbar *ngIf="!media.isActive('xs')" color="accent" fxLayoutGap="8px">
      <a mat-button routerLinkActive="active-link" routerLink="/manager/home">
        Manager's Dashboard
      </a>
      <a mat-button routerLinkActive="active-link" routerLink="/manager/users">
        User Management
      </a>
      <a mat-button routerLinkActive="active-link" routerLink="/manager/receipts">
        Receipt Lookup
      </a>
      <span class="flex-spacer"></span>
      <button
        routerLink="/inventory/home"
        class="mat-elevation-z2"
        mat-mini-fab
        aria-label="Inventory"
      >
        <mat-icon>list</mat-icon>
      </button>
      <button routerLink="/pos" class="mat-elevation-z2" aria-label="POS" mat-mini-fab>
        <mat-icon>shopping_cart</mat-icon>
      </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./manager.component.scss'],
})
export class ManagerComponent implements OnInit {
  constructor(public media: MediaObserver) {}

  ngOnInit(): void {}
}
