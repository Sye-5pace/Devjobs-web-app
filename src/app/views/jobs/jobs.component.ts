// jobs.component.ts

import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { JobsData } from '../../interface';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
})

export class JobsComponent implements OnChanges {
  @Input() jobsData: JobsData[] = [];
  filteredJobs: JobsData[] = [];

  // class properties
  filterForm: FormGroup;
  titleValue: string = '';
  locationValue: string = '';
  contractValue: string = '';
  // notFound: boolean = false; 


  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      title: [''],
      location: [''],
      contract: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jobsData']) {
      this.applyFilters()
    }
  }



  onSubmit(): void {
    this.applyFilters()
  }
  
  applyFilters(): JobsData[] {
    this.titleValue = this.filterForm.get('title')!.value.toLowerCase().trim();
    this.locationValue = this.filterForm.get('location')!.value.toLowerCase();
    this.contractValue = this.filterForm.get('contract')!.value.toLowerCase();
    console.log('Filterform:', this.filterForm.value);

    this.filteredJobs = [...this.jobsData];

    if (this.titleValue) {
      this.filteredJobs = this.filteredJobs.filter(job =>
        job.position.toLowerCase().includes(this.titleValue)
      );
    }

    if (this.locationValue) {
      this.filteredJobs = this.filteredJobs.filter(job =>
        job.location.toLowerCase().includes(this.locationValue)
      );
    }

    if (this.contractValue) {
      this.filteredJobs = this.filteredJobs.filter(job => 
        job.contract.toLowerCase() === this.contractValue);
    }

    // this.notFound = 
    return this.filteredJobs;
  }

}
