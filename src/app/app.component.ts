import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import * as lng from 'leaflet'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LeafletModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Hitzeinseln';
  options = {
    layers: [
      lng.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 8,
    center: lng.latLng(51.233334, 6.783333)
  };
}
