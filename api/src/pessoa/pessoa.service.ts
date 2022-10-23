import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { Pessoa } from './entities/pessoa.entity';

@Injectable()
export class PessoaService {
  constructor(
    @Inject('PESSOA_REPOSITORY')
    private readonly repository: Repository<Pessoa>
  ) {}

  async create(data: CreatePessoaDto) : Promise<Pessoa> {
    const pessoa = await this.repository.create({
      ...data
    });
    return this.repository.save(pessoa);
  }

  findAll(): Promise<Pessoa[]> {
    return this.repository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} pessoa`;
  }

  update(id: number, updatePessoaDto: UpdatePessoaDto) {
    return `This action updates a #${id} pessoa`;
  }

  remove(id: number) {
    return `This action removes a #${id} pessoa`;
  }
}
