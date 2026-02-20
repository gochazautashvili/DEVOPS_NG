import { ChangeDetectionStrategy, Component } from '@angular/core';

type SkillCategory = 'frontend' | 'backend' | 'tools';

interface Skill {
  name: string;
  category: SkillCategory;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  protected readonly skills: Skill[] = [
    { name: 'HTML5', category: 'frontend' },
    { name: 'CSS3', category: 'frontend' },
    { name: 'TypeScript', category: 'frontend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'PostgreSQL', category: 'backend' },
    { name: 'Docker', category: 'tools' },
    { name: 'Git', category: 'tools' },
  ];
}
