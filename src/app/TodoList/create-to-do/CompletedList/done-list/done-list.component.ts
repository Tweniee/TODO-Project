import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DoneListComponent implements OnInit {
  @Input() doneTask:any | undefined; 
  @Output() outputDoneToDo = new EventEmitter<any>();
  doneList: any[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    if(this.doneTask.name!='' && this.doneTask.name!=null 
    && this.doneTask.description!='' && this.doneTask.description!=null
    && this.doneTask.repeat!='' && this.doneTask.repeat!=null){
    this.doneList.push(this.doneTask);
    }else if(this.doneTask[0]?.name!='' && this.doneTask[0]?.name!=null 
    && this.doneTask[0]?.description!='' && this.doneTask[0]?.description!=null
    && this.doneTask[0]?.repeat!='' && this.doneTask[0]?.repeat!=null){
    this.doneList.push(this.doneTask[0]);
    }
  }
  doneListData(){
    this.doneList=this.doneTask;
    return this.doneList
  }
  removeTodo(item: any, i: number){
    this.doneList.splice(i,1);
    this.outputDoneToDo.emit(item)

  }
}
