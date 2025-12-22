import {Component, ElementRef, signal, viewChild, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // This refers to <div #about>
  // It returns a Signal containing an ElementRef<HTMLDivElement>
  protected readonly aboutSection = viewChild<ElementRef<HTMLDivElement>>('about');

  scrollToAbout() {
    // Accessing the underlying native element
    this.aboutSection()?.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
