import { Component, OnInit } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public _roter:Router) { }

  ngOnInit() {
  }
  onLogoutClick() {
    localStorage.clear();
    this._roter.navigate(['/']);
  }

}
