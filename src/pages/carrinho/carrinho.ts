import { AlertProvider } from './../../providers/alert/alert';
import { CarrinhoModel } from './../../app/models/carrinhoModel';
import { CarrinhoProvider } from './../../providers/carrinho/carrinho';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AcaoCarrinhoEnum } from '../../app/enums/AcaoCarrinhoEnum';
import { ProdutoModel } from '../../app/models/produtoModel';

@IonicPage()
@Component({
  selector: 'page-carrinho',
  templateUrl: 'carrinho.html',
})
export class CarrinhoPage {

  produtos: any;
  totalProdutos: number = 0.00;
  carrinho: CarrinhoModel = new CarrinhoModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private carrinhoSrv: CarrinhoProvider,
    private alertSrv: AlertProvider) {
  }

  ionViewDidLoad() {
    this.carrinhoSrv.getCarrinho().subscribe(data => {
      this.carrinho = data;
    });
  }

  quantidadeAlterada(produto: ProdutoModel, evt: any): void {
    if (evt.acao == AcaoCarrinhoEnum.Adicionar)
      this.carrinhoSrv.adicionarNovoItem(produto);
    else
      this.carrinhoSrv.removerItem(produto);
  }

  async finalizarPedido(): Promise<void> {
    try {
      let pedidoResult = await this.carrinhoSrv.SalvarPedido(this.carrinho);
      if (pedidoResult.success) {
        this.alertSrv.toast('Pedido realizado com sucesso, logo você estará matando sua fome :D', 'bottom');
      }
    } catch (error) {
      console.log('Problema ao enviar seu pedido', error);
    }
  }

}
