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
]
}
