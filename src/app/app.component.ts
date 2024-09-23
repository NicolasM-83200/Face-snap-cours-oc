import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis toujours!',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      10
    );
    this.myOtherSnap = new FaceSnap(
      'Poulpy',
      'Le pire ennemi de mon meilleur ami!',
      'https://boutique.plushtoy.fr/WebRoot/ce_fr/Shops/186372/5F84/B95E/589A/04C6/565D/C0A8/1911/2000/peluche-pieuvre-110-cm-orange_ml.jpg',
      new Date(),
      1
    );
    this.myLastSnap = new FaceSnap(
      'Lapinou',
      'Un lapin vachement fort!',
      'https://gastonethortense.com/4329-large_default/product.jpg',
      new Date(),
      10
    );

    this.myOtherSnap.setLocation("Dans les profondeurs de l'océan");
  }
}
