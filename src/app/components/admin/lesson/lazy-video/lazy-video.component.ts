import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lazy-video',
  templateUrl: './lazy-video.component.html',
  styleUrl: './lazy-video.component.scss'
})
export class LazyVideoComponent {
  videoLoaded: boolean = false;

  @ViewChild('videoPlayer') videoPlayer: ElementRef<HTMLVideoElement> | undefined;

  onVideoLoad() {
    this.videoLoaded = true;
  }

  playVideo() {
    if (this.videoPlayer && this.videoPlayer.nativeElement) {
      this.videoPlayer.nativeElement.play();
    }
  }
}
