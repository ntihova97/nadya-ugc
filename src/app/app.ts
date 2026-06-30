import { Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly aboutSection = viewChild<ElementRef<HTMLDivElement>>('about');
  protected activeTab = signal<'solo' | 'duo'>('solo');

  scrollToAbout() {
    this.aboutSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

  setTab(tab: 'solo' | 'duo') {
    this.activeTab.set(tab);
  }

  toggleVideo(event: Event) {
    const wrapper = event.currentTarget as HTMLElement;
    const video = wrapper.querySelector('video') as HTMLVideoElement;
    if (!video) return;
    if (video.paused) {
      video.play();
      wrapper.classList.add('playing');
    } else {
      video.pause();
      wrapper.classList.remove('playing');
    }
  }
}
