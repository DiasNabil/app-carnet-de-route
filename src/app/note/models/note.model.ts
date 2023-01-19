/**
 * @class Note
 */

import { Exercise } from "./Exercise.model";

export class Note {
    id: number;
    tag: Array<string>;
    content: string;
    date: Date;
    exercises: Array<Exercise> 
}