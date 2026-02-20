import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements OnInit, OnDestroy {
  private readonly titles = [
    'Frontend Developer',
    'Angular Specialist',
    'TypeScript Enthusiast',
    'UI/UX Craftsman',
  ];

  protected readonly displayedTitle = signal('');
  protected readonly cursorVisible = signal(true);

  private titleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typeInterval: ReturnType<typeof setInterval> | null = null;
  private cursorInterval: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.startTyping();
    this.startCursorBlink();
  }

  ngOnDestroy(): void {
    if (this.typeInterval) clearInterval(this.typeInterval);
    if (this.cursorInterval) clearInterval(this.cursorInterval);
  }

  private startTyping(): void {
    this.typeInterval = setInterval(() => {
      const currentTitle = this.titles[this.titleIndex];

      if (this.isDeleting) {
        this.charIndex--;
        this.displayedTitle.set(currentTitle.slice(0, this.charIndex));

        if (this.charIndex === 0) {
          this.isDeleting = false;
          this.titleIndex = (this.titleIndex + 1) % this.titles.length;
        }
      } else {
        this.charIndex++;
        this.displayedTitle.set(currentTitle.slice(0, this.charIndex));

        if (this.charIndex === currentTitle.length) {
          setTimeout(() => {
            this.isDeleting = true;
          }, 2000);
        }
      }
    }, 80);
  }

  private startCursorBlink(): void {
    this.cursorInterval = setInterval(() => {
      this.cursorVisible.update((v) => !v);
    }, 530);
  }
}
