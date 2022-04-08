import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public toDo: any;
  CheckedTask: any[]=[];
  uncheckedtoDO: any[]=[];
  doneToDO: any[]=[]
  appTodo:any[]=[];
  title = 'TODO-Project';
  
  ngOnInit(){
    this.toDo={
      name:'',
      description:'',
      repeat:''
    }
  }
  addToList(){
    if(this.toDo.name!='' && this.toDo.name!=null 
    && this.toDo.description!='' && this.toDo.description!=null
    && this.toDo.repeat!='' && this.toDo.repeat!=null){
      this.uncheckedtoDO=this.toDo;
      this.toDo=[];
    }
  }
  outputCheckedToDo(event: any){
    let tempAppArray=event;
    this.doneToDO=[]
    this.doneToDO.push(tempAppArray)
  }
  outputDoneToDo(event: any){
    let tempAppArray=event;
    this.uncheckedtoDO=[]
    this.uncheckedtoDO.push(tempAppArray)
  }
}
