import { Injectable } from "@angular/core";
import { Employee } from "./emp.model";

@Injectable()
export class EmployeeService{
    earr=[new Employee(101,"shakal",25000,"IT"),
          new Employee(102,"abhijit",50000,"mech"),
          new Employee(103,"ashwini",100000,"dev")];

          getAllEmployee(){
              return this.earr;
          }
          addEmployee(e:Employee){
            this.earr.push(e);
          }
          updateEmployee(e:Employee){
              console.log(e);
            for(let i=0;i<this.earr.length;i++){
                if(this.earr[i].eid==e.eid){
                    this.earr[i].ename=e.ename;
                    this.earr[i].salary=e.salary;
                    this.earr[i].dept=e.dept;

                    break;

                }
            }
          }
          deleteEmployee(e:Employee){
              for(let i=0;i<this.earr.length;i++){
                  if(this.earr[i].eid==e.eid){
                      this.earr.splice(i,1);
                  }
              }
          }
}