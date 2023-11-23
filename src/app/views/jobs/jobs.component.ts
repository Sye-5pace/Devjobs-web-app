import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
})

export class JobsComponent {
  //class properties
  filterForm: FormGroup;
  titleValue: string = '';
  locationValue: string = '';
  fulltimeValue: string = '';

  constructor(private fb: FormBuilder){
    this.filterForm = this.fb.group({
      title : [''],
      location: [''],
      fulltime: [false]
    })
  }

  onSubmit(): void {
    this.titleValue = this.filterForm.get('title')!.value;
    this.locationValue = this.filterForm.get('location')!.value;
    this.fulltimeValue = this.filterForm.get('fulltime')!.value;

    // console.log('Sort Location:', this.locationValue);
    // console.log('Fulltime:', this.fulltimeValue)
    console.log('Filterform:', this.filterForm.value);


  }


}
