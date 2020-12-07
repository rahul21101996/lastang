import { Component, EventEmitter, Input, Output, SimpleChanges } from "@angular/core";
import { Employee } from "../emp.model";
import { EmployeeService } from "../emp.service";

@Component({
    selector:"eform",
    templateUrl:"./eform.component.html",
    styleUrls:["./eform.component.css"]
})
export class EformComponent{
 
    constructor(private eservice:EmployeeService){


    }
    eid:number;
    ename:string;
    salary:number;
    dept:string;
    @Input("eupdate") emp:Employee; 
    @Output() myevent=new EventEmitter();

    ngOnChanges(change:SimpleChanges){
        console.log(change);
        if(change["emp"].currentValue!=change["emp"].previousValue){
            this.eid=this.emp.eid;
            this.ename=this.emp.ename;
            this.salary=this.emp.salary;
            this.dept=this.emp.dept;
        }

    }
    addEmployee(){
        let e=new Employee(this.eid,this.ename,this.salary,this.dept);
        this.eservice.addEmployee(e);
        this.eid=0;
        this.ename="";
        this.salary=0;
        this.dept="";
        this.myevent.emit(false);
    }
    updateEmployee(){
        let e=new Employee(this.eid,this.ename,this.salary,this.dept);
        console.log(e);
        this.eservice.updateEmployee(e);
        this.eid=0;
        this.ename="";
        this.salary=0;
        this.dept="";
        this.myevent.emit(false);
    }
    
}
