import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    return res.json({ message: 'hello world!' });
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, 
        Description: ${createItemDto.description}
        Quality: ${createItemDto.qty}`;
  }
}
