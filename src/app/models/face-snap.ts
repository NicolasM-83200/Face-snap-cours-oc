import { SnapType } from './snap-type.type';

export class FaceSnap {
  location?: string;
  id: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public ratio: number,
    public price: number,
    public snaps: number
  ) {
    this.id = crypto.randomUUID().substring(0, 8);
  }

  addSnap() {
    this.snaps++;
  }
  removeSnap() {
    this.snaps--;
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      return this.addSnap();
    }
    if (snapType === 'unsnap') {
      return this.removeSnap();
    }
  }

  setLocation(location: string) {
    this.location = location;
  }
  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
