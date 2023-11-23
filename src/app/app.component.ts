import { Component,OnInit } from '@angular/core';
import { JobsDataService } from './jobs-data.service'
import { JobsData } from './interface'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  jobData: JobsData[] = [];

  constructor(private jobsDataService: JobsDataService){}

  ngOnInit() {
    this.jobsDataService.getData().subscribe( data => {
      this.jobData = data.jobs
    })
  }
}
