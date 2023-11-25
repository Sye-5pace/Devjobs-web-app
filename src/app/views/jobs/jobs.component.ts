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

  // class properties
  filterForm: FormGroup;
  titleValue: string = '';
  locationValue: string = '';
  fulltimeValue: string = '';

  constructor(private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      title: [''],
      location: [''],
      fulltime: [false]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['jobsData']) {
      // Here, you can use this.jobsData as needed
      // console.log('Received jobsData at ngOnChanges:', this.jobsData);
    }
  }

  

  onSubmit(): void {
    this.titleValue = this.filterForm.get('title')!.value;
    this.locationValue = this.filterForm.get('location')!.value;
    this.fulltimeValue = this.filterForm.get('fulltime')!.value;

    console.log('Filterform:', this.filterForm.value);
  }
}
