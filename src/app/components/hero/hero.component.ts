import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @ViewChild('heroEl', { static: true }) heroEl!: ElementRef<HTMLElement>;
  @ViewChild('glowEl', { static: true }) glowEl!: ElementRef<HTMLElement>;

  private reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  @HostListener('mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (this.reducedMotion) return;
    const rect = this.heroEl.nativeElement.getBoundingClientRect();
    const glow = this.glowEl.nativeElement;
    glow.style.left = e.clientX - rect.left + 'px';
    glow.style.top = e.clientY - rect.top + 'px';
    glow.style.opacity = '1';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.glowEl.nativeElement.style.opacity = '0';
  }
}
