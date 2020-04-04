import {Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Answer} from "./Answer";
import {User} from "./User";

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    content: string;
    @ManyToOne(type => User)
    author:User;
    @OneToMany(type => Answer, answer => answer.question)
    readonly answerList?:Answer[];

    addAnswer?(answer:Answer){
        this.answerList.push(answer);
        answer.question = this;
    }
}
