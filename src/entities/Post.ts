import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

export enum CategoryType {
  SOCIAL = "social",
  TECH = "tech",
  FITNESS = "fitness",
}

@Entity("post")
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  title: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  photo: string;

  @Column({ default: "" })
  profilePic: string;

  @Column({
    type: "enum",
    enum: CategoryType,
  })
  type: string;



  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
