import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import { Question } from 'src/app/models/question';
import { Quiz} from 'src/app/models/quiz';
import { Choice} from 'src/app/models/choice';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
  })

export class QuestionComponent implements OnInit {
  
  questions: Array<Question>=[]
  choices: Array<Choice>=[]


  currentQuestion: any;
  
  quizName: string;
  
  index: number = 0;
  length: any;
  isLastQuestion: boolean = false;
  isFirstQuestion: boolean = false;
  answer: Array<any> = [];
  count: number = 0;
  currentQuestionText:string;
  

  constructor(private quizService : QuizService, private router: Router, private route: ActivatedRoute) { }

  // ngOnInit(): void {
  //   this.quizService.fetchAllQuestions()
  //   .subscribe((res:Quiz)=> {
  //     console.log(res);
  //     this.questions = res.questions;
      
  //   })
    
  // }


  ngOnInit():void {
    this.route.paramMap.subscribe(params => {
      
      console.log('***', params.get('name'));
      this.quizName = params.get("name");
      console.log(this.quizName);
    })
    this.quizService.fetchAllQuestions(this.quizName).subscribe((res: any) => {
      
      this.questions = res.questions;
      this.length = this.questions.length;
      console.log("questions", this.questions);
      this.currentQuestion = this.questions[this.index];
      this.currentQuestionText = this.currentQuestion.text;
      console.log("current question text",this.currentQuestionText)
      console.log("current question", this.currentQuestion);
      this.choices = this.currentQuestion.choices;
      console.log("current choice", this.choices);
      console.log("length of question", this.length);
      this.isFirstQuestion = true;
      
    })

}


nextQuestion() {
  if (this.index < this.length) {
    ++this.index;
    if(this.index>0){
      this.isFirstQuestion=false;
      // console.log("from next",this.isFirstQuestion);
    }
    
    console.log(this.index);
    this.currentQuestion = this.questions[this.index];
    this.currentQuestionText = this.currentQuestion.text;
    this.choices = this.currentQuestion.choices;
    this.isLastQuestion = false;
    //  console.log("last question",this.isLastQuestion);
    if (this.index == this.length - 1) {
      this.isLastQuestion = true;
      // console.log(this.isLastQuestion);
    }
  }

}
previousQuestion() {
  if (this.index > 0) {
    --this.index;
    if(this.index<this.length){
      this.isLastQuestion=false;
    }
    console.log(this.index);
    this.currentQuestion = this.questions[this.index];
    this.currentQuestionText = this.currentQuestion.text;
    this.choices = this.currentQuestion.choices;
    this.isFirstQuestion = false;
    console.log("first question", this.isFirstQuestion);
    if (this.index == 0) {
      this.isFirstQuestion = true;
      console.log("first question", this.isFirstQuestion);
    }
  }
}
calculate(isAnswer: boolean) {
  this.answer[this.index]=isAnswer;
  console.log(this.answer);
}
finalResult() {
 
}
viewResult(){
  this.answer.forEach(i => {
    if (i == true) {
      this.count++;
    }
  });
  console.log("result", this.count);
  this.router.navigate(["viewResult",{count:this.count,totalQuestion:this.length}]);

}

}





