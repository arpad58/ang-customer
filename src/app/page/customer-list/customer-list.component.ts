import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customerList$: Observable<Customer[]> = this.customerService.getAll();

  constructor(
    private customerService: CustomerService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(customer: Customer): void {
    
    this.customerService.delCustomer(customer).subscribe(
      () => {
         this.customerList$ = this.customerService.getAll();
       }
    );
}


}
