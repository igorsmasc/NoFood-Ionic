import { UsuarioProvider } from './../providers/usuario/usuario';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConfigHelper } from './helpers/configHelper';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = UsuarioProvider.IsLogado ? 'CategoriaPage' : 'LoginPage';

  constructor(
    private platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen) {

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

    });

  }


}

