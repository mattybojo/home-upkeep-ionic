import { Component, inject, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { IonButton, IonButtons, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonPopover, IonTitle, IonToolbar } from "@ionic/angular/standalone";
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'hu-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonButton, IonHeader, IonToolbar, IonMenuButton, IonButtons, IonTitle, IonPopover, IonIcon, FontAwesomeModule]
})
export class HeaderComponent {

  @Input() title: string = '';

  // Icons
  faCircleUser = faCircleUser;
  faRightFromBracket = faRightFromBracket;

  // DI
  private authService = inject(AuthService);

  constructor() { }

  signOut(): void {
    this.authService.signOut();
  }
}
