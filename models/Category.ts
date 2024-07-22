import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Category {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  imageUrl!: string;

  @Column({ default: false })
  isPublished!: boolean;

  @Column("text")
  description!: string;
}
