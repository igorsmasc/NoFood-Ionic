import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProdutoModel } from '../../app/models/produtoModel';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the VisualizarProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-visualizar-produto',
  templateUrl: 'visualizar-produto.html',
})
export class VisualizarProdutoPage {

  produto: ProdutoModel = new ProdutoModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ViewCrtl: ViewController,
    private alertSrv: AlertProvider) {
    }

  ionViewDidLoad() {

    this.produto = <ProdutoModel> this.navParams.get('produto')

  }

  voltar() {
    this.ViewCrtl.dismiss();
  }

  adicionarNoCarrinho() {
    this.alertSrv.toast('Produto adicionado ao carrinho com sucesso!', 'bottom');
    this.ViewCrtl.dismiss();
  }

}
