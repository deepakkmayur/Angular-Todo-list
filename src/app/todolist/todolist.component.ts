import { Component } from '@angular/core';
import {NgForm}  from '@angular/forms'

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  taskArray=[{taskName:"brush teeth",isCompleted:false}]
// constructor(){

// }
// ngOnInit(){

// }

onSubmit(form:NgForm){
 console.log(form);
  this.taskArray.push({
    // taskName:form.controls['task'].value,
    taskName:form.value.task,
    isCompleted:false
  })

  form.reset()
}
onDelete(index:number){
  console.log("clicked");
  console.log(typeof index);
  this.taskArray.splice(index,1)
}

onCheckBox(index:number){
  console.log(this.taskArray,index);
  this.taskArray[index].isCompleted=!this.taskArray[index].isCompleted
}

}
