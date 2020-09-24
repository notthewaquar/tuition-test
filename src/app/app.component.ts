import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'make-test';

  title = 'tuition-test';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
