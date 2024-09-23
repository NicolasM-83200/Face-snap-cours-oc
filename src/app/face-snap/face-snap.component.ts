import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass, UpperCasePipe, DatePipe],
  templateUrl: './face-snap.component.html',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap() {
    this.userHasSnapped ? this.unSnap() : this.snap();
  }
  unSnap() {
    this.faceSnap.removeSnap();
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  snap() {
    this.faceSnap.addSnap();
    this.snapButtonText = 'Oups, unSnap!';
    this.userHasSnapped = true;
  }
}
