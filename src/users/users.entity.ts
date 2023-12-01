import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tb_user_system')
export class User {
  @PrimaryGeneratedColumn()
  code: number;

  @Column({ length: 20, unique: true, nullable: false })
  username: string;

  @Column({ length: 255, nullable: false })
  password: string;

  @Column({ length: 255, nullable: true })
  password_web: string;

  @Column({ length: 50 })
  domain: string;

  @Column({ length: 50 })
  full_name: string;

  @Column({ length: 100, nullable: false })
  email: string;

  @Column()
  initial_password: boolean;

  @Column({ length: 11 })
  cpf: string;

  @Column()
  employee: number;

  @Column({ nullable: false })
  disabled: boolean;

  @Column({ nullable: false })
  create_by: number;

  @Column({ nullable: false })
  create_on: Date;

  @Column()
  change_by: number;

  @Column()
  change_on: Date;
}
