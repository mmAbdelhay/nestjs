import { IsNotEmpty, isNumber } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly description: string;

  readonly qty: number;
}
