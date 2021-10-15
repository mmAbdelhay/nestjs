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
import { ItemsService } from './items.service';
import { responseObject } from '../responseObject';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async findAll(@Res() res: Response) {
    const items = await this.itemsService.findAll();
    res.json(
      responseObject('All items', items ?? 'no items found', res.statusCode),
    );
  }

  @Get(':name')
  async findOne(@Param('name') name, @Res() res: Response) {
    const item = await this.itemsService.findOne(name);
    res.json(
      responseObject(
        'Item',
        item ?? 'no item found by this name',
        res.statusCode,
      ),
    );
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto, @Res() res: Response) {
    const newItem = await this.itemsService.create(createItemDto);
    res.json(
      responseObject(
        newItem ? 'Item created successfully' : 'Item not created',
        newItem ?? 'Item not created',
        res.statusCode,
      ),
    );
  }

  @Delete(':id')
  async delete(@Param('id') id, @Res() res: Response) {
    const item = await this.itemsService.delete(id);
    res.json(
      responseObject(
        item ? 'Item deleted successfully' : 'Item not deleted',
        item ?? 'Item not deleted',
        res.statusCode,
      ),
    );
  }

  @Put(':id')
  async update(
    @Body() updateItemDto: CreateItemDto,
    @Param('id') id,
    @Res() res: Response,
  ) {
    const updatedItem = await this.itemsService.update(id, updateItemDto);
    res.json(
      responseObject(
        updatedItem ? 'Item updated successfully' : 'Item not updated',
        updatedItem ?? 'Item not updated',
        res.statusCode,
      ),
    );
  }
}
