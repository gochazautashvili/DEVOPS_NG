import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  signal,
} from '@angular/core';

type NavLink = { label: string; anchor: string };

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.navbar--scrolled]': 'isScrolledClass',
  },
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  protected readonly navLinks: NavLink[] = [
    { label: 'About', anchor: '#about' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Experience', anchor: '#experience' },
    { label: 'Contact', anchor: '#contact' },
  ];

  protected readonly activeSection = signal<string>('');
  protected readonly menuOpen = signal(false);
  protected readonly isScrolled = signal(false);

  protected get isScrolledClass(): boolean {
    return this.isScrolled();
  }

  private observer: IntersectionObserver | null = null;
  private scrollListener: (() => void) | null = null;

  ngAfterViewInit(): void {
    const options: IntersectionObserverInit = {
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.activeSection.set(`#${entry.target.id}`);
        }
      });
    }, options);

    const sectionIds = ['about', 'projects', 'experience', 'contact'];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) this.observer!.observe(el);
    });

    this.scrollListener = () => {
      this.isScrolled.set(window.scrollY > 10);
    };
    window.addEventListener('scroll', this.scrollListener, { passive: true });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
