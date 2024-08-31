import { Module } from '@nestjs/common';
import { UsersController } from './interfaces/controllers/users.controller';
import { UsersService } from './infrastructure/services/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
