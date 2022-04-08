import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToDoListComponent implements OnInit {
  @Input() uncheckToDo:any | undefined;  
  @Output() outputCheckedToDo = new EventEmitter<any[]>();
  CheckedTask: any[]=[];
  unChecked: any[]=[];
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    if((this.uncheckToDo?.name!='' && this.uncheckToDo?.name!=null 
    && this.uncheckToDo?.description!='' && this.uncheckToDo?.description!=null
    && this.uncheckToDo?.repeat!='' && this.uncheckToDo?.repeat!=null)){
    this.unChecked.push(this.uncheckToDo);
    }else if(this.uncheckToDo[0]?.name!='' && this.uncheckToDo[0]?.name!=null 
    && this.uncheckToDo[0]?.description!='' && this.uncheckToDo[0]?.description!=null
    && this.uncheckToDo[0]?.repeat!='' && this.uncheckToDo[0]?.repeat!=null){
      this.unChecked.push(this.uncheckToDo[0]);
    }
  }
  unCheckedData(){
    this.unChecked=this.uncheckToDo;
  }
  doneTask(item: any, index: number){
    this.CheckedTask=item
    this.unChecked.splice(index,1);
    this.outputCheckedToDo.emit(this.CheckedTask)

  }

}
