import { IsDefined } from 'class-validator'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Car } from './Car.js'

@Entity()
export class CarDealer {
  @PrimaryGeneratedColumn({
    name: 'car_dealer_id',
  })
  public id: string

  @Column()
  @IsDefined()
  public name: string

  @OneToMany(() => Car, (car) => car.carDealer, {
    cascade: true,
  })
  public cars: Array<Car>
}
