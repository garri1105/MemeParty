import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'meme-tiles',
  templateUrl: 'meme-tiles.html'
})
export class MemeTilesComponent {

  @Input() images: string[];
  @Output() selectedImage: EventEmitter<number>;
  prevImage: any;
  constructor() {
    this.selectedImage = new EventEmitter<number>();
  }

  addImage(event, index: number) {
    if (this.prevImage) {
      this.prevImage.style.opacity = '1';
    }

    this.prevImage = event.target;
    this.prevImage.style.opacity = '0.5';

    this.selectedImage.emit(index);
  }
}
