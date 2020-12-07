import { Component } from "@angular/core";
import { Employee } from "../emp.model";
import { EmployeeService } from "../emp.service";

@Component({
    selector:"etab",
    templateUrl:"./etab.component.html",
    styleUrls:["./etab.component.css"]
})
export class EtabComponent{
    earr:Employee[];
    flag:boolean=false;
    eob:Employee;
    constructor(private eservice:EmployeeService){

    }
    ngOnInit(){
        this.earr=this.eservice.getAllEmployee();
    }
    displayForm(){
        this.flag=true;
    }
    editEmployee(e:Employee){

        this.flag=true;
        this.eob=e;
        console.log(this.eob);
       
    }
    deleteEmployee(e:Employee){
        this.eservice.deleteEmployee(e);
    }
}



