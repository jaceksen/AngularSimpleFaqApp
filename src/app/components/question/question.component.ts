import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

import { Question } from '../../models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {
  @Input('question') question:Question;

  constructor() { }

  ngOnInit() {
  }

}
