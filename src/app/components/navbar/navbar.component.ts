import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RippleModule, TooltipModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  CV_FILE_PATH = 'assets/Curriculum_vitae_Esteban_Soto_Henríquez.pdf'; 
  constructor() {
    
    
  }
  downloadFile() {
    
  }
}
