import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];
  

  constructor() { 
    this.questions = [
      {
        text:'what is your name?',
        answer:'My name is Jacek Seń',
        hide: true
      },
      {
        text:'what is your favorite color?',
        answer:'My favorite color is green',
        hide: true
      },
      {
        text:'what is your favorite language?',
        answer:'My favorite language is Java',
        hide: true
      }
    ];
  }

  getQuestions(){
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);
  }

  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
      }
    }
  }

}
