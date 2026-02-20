import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  accentColor: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  protected readonly projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-featured online store with product catalog, cart management, user authentication, and Stripe payment integration. Built for performance with lazy loading and virtual scrolling.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      accentColor: '#2563eb',
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      description:
        'Real-time weather application with geolocation, 7-day forecasts, interactive charts, and location search. Consumes OpenWeatherMap API with intelligent caching.',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      accentColor: '#0891b2',
    },
    {
      id: 3,
      title: 'Task Manager',
      description:
        'Collaborative project management tool with drag-and-drop kanban boards, real-time updates via WebSockets, team workspaces, and detailed analytics.',
      tech: ['Angular', 'TypeScript', 'Node.js', 'Socket.io', 'Docker'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      accentColor: '#7c3aed',
    },
  ];
}
