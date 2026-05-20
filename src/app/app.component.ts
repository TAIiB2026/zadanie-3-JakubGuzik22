import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InfoService } from './services/info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styles: []
})
export class AppComponent implements OnInit {
  lastFetch: Date | null = null;
  lastInstance: Date | null = null;

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.lastFetchDate$.subscribe(d => this.lastFetch = d);
    this.infoService.lastInstanceDate$.subscribe(d => this.lastInstance = d);
  }
}
