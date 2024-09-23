export class FaceSnap {
  location?: string;

  constructor(
    public title: string,
    public description: string,
    public imageUrl: string,
    public createdAt: Date,
    public ratio: number,
    public price: number,
    public snaps: number
  ) {}

  addSnap() {
    this.snaps++;
  }
  removeSnap() {
    this.snaps--;
  }

  setLocation(location: string) {
    this.location = location;
  }
  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
