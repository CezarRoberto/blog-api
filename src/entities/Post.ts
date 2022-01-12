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

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
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

  @ManyToOne(() => User, (user) => user.posts)
  @JoinColumn({ name: "photoId" })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
