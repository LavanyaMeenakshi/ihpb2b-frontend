import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-employee-search-results',
  templateUrl: './employee-search-results.component.html',
  styleUrls: ['./employee-search-results.component.css']
})
export class EmployeeSearchResultsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(): void {//this function should take the user back to the manage page
    this.router.navigate(['/']);//change url to match correct page
  }

  

}
