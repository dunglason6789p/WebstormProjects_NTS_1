import {Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./User";
import {Question} from "./Question";

@Entity()
export class Answer {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    content: string;
    @ManyToOne(type => User)
    author:User;
    @ManyToOne(type => Question, question => question.answerList)
    question: Question;

    setQuestion?(question:Question){
        this.question = question;
        question.answerList.push(this);
    }
}
