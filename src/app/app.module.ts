import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateToDoComponent } from './TodoList/create-to-do/create-to-do.component';
import { ToDoListComponent } from './TodoList/create-to-do/PendingList/to-do-list/to-do-list.component';
import { DoneListComponent } from './TodoList/create-to-do/CompletedList/done-list/done-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateToDoComponent,
    ToDoListComponent,
    DoneListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
