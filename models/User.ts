// FILE: @/app/models/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  email!: string;
  @Column({ default: true })
  status!: boolean;
}
