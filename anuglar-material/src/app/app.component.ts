// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators, FormGroupDirective, NgForm, FormBuilder } from '@angular/forms';
// import {ErrorStateMatcher} from '@angular/material/core';
// import { Observable } from 'rxjs/internal/Observable';
// import { map, tap, concatAll, filter, startWith } from 'rxjs/operators';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


// export interface StateGroup {
//   letter: string;
//   names: string[];
// }





// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent implements OnInit {

//   form = new FormGroup ({
//     Region: new FormControl( {value: '', disabled: false }, [Validators.required]),

//   });

//   options: string[] = ['angular', 'react', 'vue' ];
//   objectOptions = [
//     { name: 'Cat' },
//     { name: 'Dog' },
//     { name: 'Monkey' },
//     { name: 'Mouse' },
//   ];





//   stateGroups: StateGroup[] = [{
//     letter: 'A',
//     names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
//   }, {
//     letter: 'C',
//     names: ['California', 'Colorado', 'Connecticut']
//   }, {
//     letter: 'D',
//     names: ['Delaware']
//   }, {
//     letter: 'F',
//     names: ['Florida']
//   }, {
//     letter: 'G',
//     names: ['Georgia']
//   }, {
//     letter: 'H',
//     names: ['Hawaii']
//   }, {
//     letter: 'I',
//     names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
//   }, {
//     letter: 'K',
//     names: ['Kansas', 'Kentucky']
//   }, {
//     letter: 'L',
//     names: ['Louisiana']
//   }, {
//     letter: 'M',
//     names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
//       'Minnesota', 'Mississippi', 'Missouri', 'Montana']
//   }, {
//     letter: 'N',
//     names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
//       'New Mexico', 'New York', 'North Carolina', 'North Dakota']
//   }, {
//     letter: 'O',
//     names: ['Ohio', 'Oklahoma', 'Oregon']
//   }, {
//     letter: 'P',
//     names: ['Pennsylvania']
//   }, {
//     letter: 'R',
//     names: ['Rhode Island']
//   }, {
//     letter: 'S',
//     names: ['South Carolina', 'South Dakota']
//   }, {
//     letter: 'T',
//     names: ['Tennessee', 'Texas']
//   }, {
//     letter: 'U',
//     names: ['Utah']
//   }, {
//     letter: 'V',
//     names: ['Vermont', 'Virginia']
//   }, {
//     letter: 'W',
//     names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
//   }];



//   StateGroups$: Observable<StateGroup[]>;

//   constructor(private _formBuilder: FormBuilder) {}









//   ngOnInit() {

//     const _filter = (opt: string[], value: string): string[] => {
//       const filterValue = value.toLowerCase();

//       return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
//     };

//     this.StateGroups$ = this.form.get('Region')!.valueChanges
//     .pipe(
//       startWith(''),
//       map(value => this._filterGroup(value))
//     );



//     // this.StateGroups$ = this.form.get('Region').valueChanges.pipe(
//     //   map(sorting => this.sort(this.stateGroups)),
//     //   tap(console.log)
//     // );
//   }


//   // sort(group: StateGroup[]): StateGroup[] {
//   //   const region =  this.form.get('Region').value;
//   //   console.log(group);

//     // if (!region.trim()) {
//     //   return group;
//     // }


//     // return group

//     // return group.filter(sorted => {
//     //   return sorted.names.filter(sort => {
//     //     console.log(sort.toLowerCase().includes(region.toLowerCase()));
//     //     return sort.toLowerCase().includes(region.toLowerCase());
//     //   });
//     //   // return sorted.names.includes(region);
//     // };


//   // }



// }









import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

/**
 * @title Option groups autocomplete
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  stateForm: FormGroup = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
  }, {
    letter: 'C',
    names: ['California', 'Colorado', 'Connecticut']
  }, {
    letter: 'D',
    names: ['Delaware']
  }, {
    letter: 'F',
    names: ['Florida']
  }, {
    letter: 'G',
    names: ['Georgia']
  }, {
    letter: 'H',
    names: ['Hawaii']
  }, {
    letter: 'I',
    names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
  }, {
    letter: 'K',
    names: ['Kansas', 'Kentucky']
  }, {
    letter: 'L',
    names: ['Louisiana']
  }, {
    letter: 'M',
    names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
      'Minnesota', 'Mississippi', 'Missouri', 'Montana']
  }, {
    letter: 'N',
    names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
      'New Mexico', 'New York', 'North Carolina', 'North Dakota']
  }, {
    letter: 'O',
    names: ['Ohio', 'Oklahoma', 'Oregon']
  }, {
    letter: 'P',
    names: ['Pennsylvania']
  }, {
    letter: 'R',
    names: ['Rhode Island']
  }, {
    letter: 'S',
    names: ['South Carolina', 'South Dakota']
  }, {
    letter: 'T',
    names: ['Tennessee', 'Texas']
  }, {
    letter: 'U',
    names: ['Utah']
  }, {
    letter: 'V',
    names: ['Vermont', 'Virginia']
  }, {
    letter: 'W',
    names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
  }];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }
}
