import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  PercentPipe,
  UpperCasePipe,
} from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [NgClass, UpperCasePipe, DatePipe, CurrencyPipe, PercentPipe],
  templateUrl: './face-snap.component.html',
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  onSnap() {
    this.userHasSnapped ? this.unSnap() : this.snap();
  }
  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oups, unSnap!';
    this.userHasSnapped = true;
  }
}
