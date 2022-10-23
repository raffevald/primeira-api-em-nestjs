import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PessoaModule } from './pessoa/pessoa.module';

@Module({
  imports: [PessoaModule],
})
export class AppModule {}
