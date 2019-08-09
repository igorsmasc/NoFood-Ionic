import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { ConfigHelper } from '../../app/helpers/configHelper';
import { CameraProvider } from '../../providers/camera/camera';
import { AlertProvider } from '../../providers/alert/alert';
import { UsuarioModel } from '../../app/models/usuarioModel';

@IonicPage()
@Component({
  selector: 'page-minha-conta',
  templateUrl: 'minha-conta.html',
})
export class MinhaContaPage {

  usuarioLogado: UsuarioModel = new UsuarioModel();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private usuarioSrv: UsuarioProvider,
    private CameraSrv: CameraProvider,
    public actionSheetCtrl: ActionSheetController,
    private alertSrv: AlertProvider) {
    // this.usuarioLogado = this.usuarioSrv.
  }

  ionViewDidLoad() {
    this.LoadingData();
  }

  mudarFoto(): void {
    let action = this.actionSheetCtrl.create({
      title: 'Foto',
      buttons: [
        { text: 'Limpar', handler: () => this.usuarioLogado.foto = ConfigHelper.photo },
        {
          text: 'TIrar Foto', handler: () => {
            this.CameraSrv.getPictureFromGalery(photo => {
              this.usuarioLogado.foto = photo;
            });
          }
        },
        { text: 'Cancelar', handler: () => { }, role: 'destructive' }
      ]
    });
    action.present();
  }

  async LoadingData(): Promise<void> {
    try {
      let user = <UsuarioModel>JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user));
      let userResul = await this.usuarioSrv.getByUid(user._id);

      if (userResul.success) {
        this.usuarioLogado = <UsuarioModel>userResul.data;
        console.log(userResul.data);
        if (!this.usuarioLogado.foto) {
          this.usuarioLogado.foto = ConfigHelper.photo;
        }
      }

    } catch (error) {
      console.log("Problema ao carregar os dados do usuário", error);
    }
  }

  async salvar(): Promise<void> {
    try {
      let salvarResult = await this.usuarioSrv.put(this.usuarioLogado._id, this.usuarioLogado);
      if (salvarResult.success) {
        this.alertSrv.toast('Dados atualizados com sucesso', 'bottom');
      }

    } catch (error) {
      console.log('Erro ao editar usuário', error);
    }
  }

}
