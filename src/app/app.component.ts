import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FeaturedMoviesComponent } from './components/featured-movies/featured-movies.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from "./components/footer/footer.component";
import { CareersComponent } from "./components/careers/careers.component";
import { MoreComponent } from './components/more/more.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FeaturedMoviesComponent, ContentComponent, FooterComponent, CareersComponent, MoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'M6-UF3-PT1-Miret-Pol';
}
