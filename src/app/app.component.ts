import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptors';

  constructor(
    private usuariosService: UsuariosService
  ) {
    this.usuariosService.obtenerUsuarios()
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log('Error en el servicio reqres.in');
      });
  }
}
