import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ProjectsComponent } from '../../components/projects/projects';
import { ExperienceComponent } from '../../components/experience/experience';
import { ContactComponent } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, AboutComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  template: `
    <app-hero />
    <app-about />
    <app-projects />
    <app-experience />
    <app-contact />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
