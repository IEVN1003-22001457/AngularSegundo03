import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { initFlowbite } from 'flowbite';

import { NavbarComponent } from './navbar/navbar.component';
import { TempComponent } from './tem/temp/temp.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, TempComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'AngularSegundo03';
  title = 'Kmach';


  ngOnInit(): void{
    initFlowbite();
  }
}
