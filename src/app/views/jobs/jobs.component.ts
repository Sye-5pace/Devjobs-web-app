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
  fulltimeValue: string = '';
  parttimeValue: string = '';
  contractValue: string = '';
  freelanceValue: string = '';

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      title: [''],
      location: [''],
      fulltime: [false],
      parttime: [false],
      contract: [false],
      freelance: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jobsData']) {
      this.applyFilters()
    }
  }



  onSubmit(): void {
    this.titleValue = this.filterForm.get('title')!.value.toLowerCase().trim();
    this.locationValue = this.filterForm.get('location')!.value.toLowerCase();
    this.fulltimeValue = this.filterForm.get('fulltime')!.value;
    this.parttimeValue = this.filterForm.get('parttime')!.value;
    this.contractValue = this.filterForm.get('contract')!.value;
    this.freelanceValue = this.filterForm.get('freelance')!.value;

    console.log('Filterform:', this.filterForm.value);

    this.applyFilters()
  }

  applyFilters(): JobsData[] {
    this.filteredJobs = [...this.jobsData];

    if (this.titleValue) {
      this.filteredJobs = this.filteredJobs.filter(job =>
        job.position.toLowerCase().includes(this.titleValue)
      );
      console.log('If titleValue:', this.filteredJobs);
    }

    if (this.locationValue) {
      this.filteredJobs = this.filteredJobs.filter(job =>
        job.location.toLowerCase().includes(this.locationValue)
      );
      console.log('If locationValue:', this.filteredJobs);
    }

    if (this.fulltimeValue) {
      this.filteredJobs = this.filteredJobs.filter(job => job.contract);
      console.log('If fulltimeValue:', this.filteredJobs);
    }

    return this.filteredJobs;
  }

}
