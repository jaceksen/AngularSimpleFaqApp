import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];
  

  constructor() { 
    /*
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
    */
  }

  getQuestions(){
    if(localStorage.getItem('questions') === null){
      this.questions = [];
    } else {
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }
    return this.questions;
  }

  addQuestion(question:Question){
    this.questions.unshift(question);

    //init local variable
    let questions;


    if(localStorage.getItem('questions') === null){
      questions = [];
      questions.unshift(question);
      //save local array to local storage
      localStorage.setItem('questions',JSON.stringify(questions));
    } else {
      questions = JSON.parse(localStorage.getItem('questions'));
      //add new question
      questions.unshift(question);
      //save to local storaga
      localStorage.setItem('questions',JSON.stringify(questions));
    }
  }

  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
      if(question == this.questions[i]){
        this.questions.splice(i,1);
        localStorage.setItem('questions',JSON.stringify(this.questions));
      }
    }
  }

}
