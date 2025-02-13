
import { Component, inject } from '@angular/core';
import { LogLevel, setLogLevel } from "@angular/fire";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClipboardList, faUser } from '@fortawesome/free-solid-svg-icons';
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterLink, IonRouterOutlet, IonSplitPane } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { archiveOutline, archiveSharp, bookmarkOutline, bookmarkSharp, heartOutline, heartSharp, logOutOutline, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, personCircleOutline, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { MenuItem } from './app.beans';
import { AuthService } from './auth/auth.service';
import { AuthStore } from './auth/auth.store';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonListHeader, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet, FontAwesomeModule],
})
export class AppComponent {
  protected menuItems: MenuItem[] = [
    { title: 'Task List', url: '/tasks', icon: faClipboardList },
  ];

  // Icons
  faUser = faUser;

  // DI
  private authService = inject(AuthService);
  readonly authStore = inject(AuthStore);

  constructor() {
    setLogLevel(LogLevel.VERBOSE);
    this.authService.initAuthListener();
    addIcons({ mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, heartOutline, heartSharp, archiveOutline, archiveSharp, trashOutline, trashSharp, warningOutline, warningSharp, bookmarkOutline, bookmarkSharp, personCircleOutline, logOutOutline });
  }
}
