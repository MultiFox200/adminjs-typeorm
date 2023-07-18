import { IsDefined } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Car } from './Car.js'

@Entity()
export class CarBuyer {
  @PrimaryGeneratedColumn('uuid', {
    name: 'car_buyer_id',
  })
  public carBuyerId: string

  @Column()
  @IsDefined()
  public name: string

  @OneToMany(() => Car, (car) => car.carDealer, {
    cascade: true,
  })
  public cars: Array<Car>
}
