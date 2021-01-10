import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This is will all movies';
  }
  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This is will one movies id: ${id}`;
  }
  @Post()
  create(){
    return 'This will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movies with the id: ${movieId}`;
  }
  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This will update a movies with the id: ${movieId}`;
  }
}
