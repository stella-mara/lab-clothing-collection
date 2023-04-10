import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.scss'],
})
export class SubmenuComponent implements OnInit {
  ngOnInit(): void {}
  dropdownAberto = false;

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }
}
