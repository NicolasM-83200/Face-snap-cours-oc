import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours!',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0.477,
      306.5,
      10
    ),
    new FaceSnap(
      'Poulpy',
      'Le pire ennemi de mon meilleur ami!',
      'https://boutique.plushtoy.fr/WebRoot/ce_fr/Shops/186372/5F84/B95E/589A/04C6/565D/C0A8/1911/2000/peluche-pieuvre-110-cm-orange_ml.jpg',
      new Date(),
      0.333,
      53.99,
      1
    ).withLocation("Dans les profondeurs de l'océan"),
    new FaceSnap(
      'Lapinou',
      'Un lapin vachement fort!',
      'https://gastonethortense.com/4329-large_default/product.jpg',
      new Date(),
      0.9999,
      999.99,
      10
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string) {
    const foundFaceSnap = this.faceSnaps.find(
      (facesnap) => facesnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType) {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap: FaceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    foundFaceSnap.snap(snapType);
  }
}
