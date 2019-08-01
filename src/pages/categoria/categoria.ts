import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { CategoriaProvider } from '../../providers/categoria/categoria';
import { CategoriaModel } from '../../app/models/categoriaModel';

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {

  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private categoriaSrv: CategoriaProvider,
    public actionSheetCtrl: ActionSheetController
  ) {
  }

  ionViewWillEnter() {
    this.load();
  }

  async load(): Promise<void> {
    try {
      let categoriasResult = await this.categoriaSrv.get();
      if (categoriasResult.success) {
        this.categorias = <Array<CategoriaModel>>categoriasResult.data;
      }

    } catch (error) {
      console.log('Problema ao carregar categorias', error)
    }
  }

  adminOptions(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Administração',
      buttons: [
        { text: 'Gerenciar Categorias', handler: () => this.gerenciarCategorias() },
        { text: 'Gerenciar Produtos', handler: () => this.gerenciarProdutos() },
        { text: 'Cancelar', handler: () => { }, role: 'destructive' }
      ]
    });
    action.present();
  }

  abrirProduto(): void {
    this.navCtrl.setRoot('TabsPage');
  }

  private gerenciarCategorias(): void {
    this.navCtrl.push('AdmCategoriasPage');
  }

  private gerenciarProdutos(): void {
    this.navCtrl.push('AdmProdutosPage');
  }

}
