import { Answer } from "./answer.model";

export class Quiz {
    id: number
    question: string;
    answer: Answer[] = [];
}
