import {BeforeInsert, Column, Entity} from "typeorm";
import {BaseEntity} from "../common/base";
import * as bcrypt from 'bcryptjs';

@Entity()
export class User extends BaseEntity {

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column({ nullable: true })
    firstName: string;

    @Column({ nullable: true })
    lastName: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}