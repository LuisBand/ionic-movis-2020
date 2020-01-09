import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import { isPrimitive } from 'util';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cardsData = [
   {
     title:'Titulo 1',
     subtitle: 'UNO',
     contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar tellus tortor, in lacinia augue sollicitudin quis. Morbi ultrices justo sit amet ornare accumsan. Vivamus id neque dapibus, ultrices neque a, venenatis ante. Nulla posuere erat nec tempor vulputate. Fusce sit amet facilisis leo, non faucibus nulla. Suspendisse cursus tellus et ligula lobortis volutpat. Curabitur sed vulputate quam, vel pretium purus. Nam at bibendum lacus. Ut dictum magna augue, id hendrerit eros rutrum sed. Nulla a ipsum id libero molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna ex, aliquam eget consequat a, commodo id nisi. Sed porta vestibulum eros, sed rutrum erat semper vitae. Praesent vitae faucibus felis.'
   },

   {
    title:'Titulo 2',
    subtitle: 'DOS',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar tellus tortor, in lacinia augue sollicitudin quis. Morbi ultrices justo sit amet ornare accumsan. Vivamus id neque dapibus, ultrices neque a, venenatis ante. Nulla posuere erat nec tempor vulputate. Fusce sit amet facilisis leo, non faucibus nulla. Suspendisse cursus tellus et ligula lobortis volutpat. Curabitur sed vulputate quam, vel pretium purus. Nam at bibendum lacus. Ut dictum magna augue, id hendrerit eros rutrum sed. Nulla a ipsum id libero molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna ex, aliquam eget consequat a, commodo id nisi. Sed porta vestibulum eros, sed rutrum erat semper vitae. Praesent vitae faucibus felis.'
  },

  {
    title:'Titulo 3',
    subtitle: 'TRES',
    contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar tellus tortor, in lacinia augue sollicitudin quis. Morbi ultrices justo sit amet ornare accumsan. Vivamus id neque dapibus, ultrices neque a, venenatis ante. Nulla posuere erat nec tempor vulputate. Fusce sit amet facilisis leo, non faucibus nulla. Suspendisse cursus tellus et ligula lobortis volutpat. Curabitur sed vulputate quam, vel pretium purus. Nam at bibendum lacus. Ut dictum magna augue, id hendrerit eros rutrum sed. Nulla a ipsum id libero molestie suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed magna ex, aliquam eget consequat a, commodo id nisi. Sed porta vestibulum eros, sed rutrum erat semper vitae. Praesent vitae faucibus felis.'
  }

  ];
  constructor(public alertController: AlertController) {}

  onBeerClick(){
    console.log("Me clickeaste weee");
  }

  // alert(){
  //   alert("Ya me clickeaste");
  // }

  async alert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'alerta de prueba',
      message: 'Esta es una alerta para ver si podemos hacer una.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
