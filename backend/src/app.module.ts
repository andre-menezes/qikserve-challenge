import { Module } from '@nestjs/common';
import { RestaurantController } from './controllers';
import { RestaurantService } from './services';

@Module({
  imports: [],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class AppModule {}
