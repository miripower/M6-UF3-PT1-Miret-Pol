import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
images = [
  {src: '/images/content1.png', alt: 'Win or Lose'},
  {src: '/images/content2.png', alt: 'Cars 3'},
  {src: '/images/content3.png', alt: 'Wall-e'},
]
}
