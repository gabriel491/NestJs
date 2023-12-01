import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Essa linha quer dizer que o que estiver abaixo é um controller
// controllers são responsáveis pelas rotas
@Controller() 
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Get é um decorador que marca o método getHello como um manipulador de rota GET
  // para um caminho específico. Nesse caso Xablau.
  //  Isso significa que quando um cliente faz uma solicitação GET para o caminho "Xablau" no aplicativo, este método será chamado para lidar com a solicitação.
 
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
