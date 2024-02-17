import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AlarmEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  severity: string;
}
