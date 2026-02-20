import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ExperienceEntry {
  id: number;
  year: string;
  company: string;
  role: string;
  isCurrent: boolean;
  bullets: string[];
}

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  protected readonly entries: ExperienceEntry[] = [
    {
      id: 1,
      year: '2023 — Present',
      company: 'TechCorp Inc.',
      role: 'Senior Frontend Developer',
      isCurrent: true,
      bullets: [
        'Lead the migration of a legacy AngularJS application to Angular 17+, reducing bundle size by 40%.',
        'Established coding standards and onboarded 4 junior developers onto the team.',
        'Implemented a design system used across 12 product teams, cutting UI development time by 30%.',
        'Introduced Vitest and achieved 85% code coverage across core modules.',
      ],
    },
    {
      id: 2,
      year: '2021 — 2023',
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      isCurrent: false,
      bullets: [
        'Built real-time dashboard features with RxJS observables and WebSocket integration.',
        'Collaborated with UX team to deliver WCAG AA-compliant interfaces.',
        'Reduced initial load time by 35% through code splitting and route-level lazy loading.',
      ],
    },
    {
      id: 3,
      year: '2019 — 2021',
      company: 'Agency Creative',
      role: 'Junior Frontend Developer',
      isCurrent: false,
      bullets: [
        'Developed responsive marketing sites and SPAs for 20+ clients.',
        "Introduced TypeScript into the team's Angular workflow, improving developer productivity.",
        'Delivered accessible ARIA-compliant components across all projects.',
      ],
    },
  ];
}
