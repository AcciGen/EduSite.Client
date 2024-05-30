import { Component, ViewChild, ElementRef } from '@angular/core';
import { QuizService } from '../../../services/quiz/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss',
})
export class QuizComponent {
  @ViewChild('checkAnswer') myDivElement!: ElementRef;



  constructor(quizService:QuizService){
    quizService.getAll().subscribe({
      next:(data)=>{
        this.quizes=data
        console.log(data)
        this.quiz=this.quizes.$values[this.index]
        this.len=this.quizes.$values.length
        console.log(this.len)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  next(){
    if(this.index<this.len-1){
      this.quiz=this.quizes.$values[this.index+1]
      this.index++
      if(!(this.index<this.len-1)){
        document.getElementById("multi-button")!.innerHTML="Check answear"
      }
    }
    else{
      console.log(this.score)
      document.getElementById("goodBoy")!.innerHTML=`total: ${this.quizes.$values.length} <br/> score: ${this.score}`
    }
  }

  preveus(){
    if(this.index>0){
      console.log("previus")
      this.quiz=this.quizes.$values[this.index-1]
      this.index--
      this.score--
    }
  }

  select(option:string){
    this.option=option
  }

  checkAnswear(){
    console.log(this.option+this.quiz.correctAnswer)
    if(this.option==this.quiz.correctAnswer){
      this.score++
    }
  }


  quizes!:any
  quiz!:any
  index:number=0
  len:number=0
  option!:string
  score:number=0


  selected: string = 'form-item';
  selected2: string = 'form-item';
  selected3: string = 'form-item';
  selected4: string = 'form-item';
  selected5: string = 'form-item';
  check: string = 'btn1  cursor';
  disabled: string = '';

  ngAfterViewInit() {
    this.myDivElement.nativeElement.disabled = true;
  }

  answer() {
    console.log('answer');
  }


  addClass() {
    this.selected = 'form-item form-item-selected';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  addClass2() {
    this.selected2 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  addClass3() {
    this.selected3 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected4 = 'form-item';
    this.selected5 = 'form-item';
    this.disabled = 'disabled';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  // ==================
  addClass4() {
    this.selected4 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected5 = 'form-item';
    this.check = 'btn1 cursor check';
    this.myDivElement.nativeElement.disabled = false;
  }
  addClass5() {
    this.selected5 = 'form-item form-item-selected';
    this.selected = 'form-item';
    this.selected2 = 'form-item';
    this.selected3 = 'form-item';
    this.selected4 = 'form-item';
  }
}
