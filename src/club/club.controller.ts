import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClubService } from './club.service';
import { CreateClubDto } from './dto/create-club.dto';

@ApiTags('club')
@Controller('club')
export class ClubController {
  constructor(private readonly clubService: ClubService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  public async createClub(@Body() createClubDto: CreateClubDto) {
    return this.clubService.create(createClubDto);
  }
}
