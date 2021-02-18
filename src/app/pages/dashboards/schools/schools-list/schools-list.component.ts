import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Link } from 'src/@vex/interfaces/link.interface';
import { trackById } from 'src/@vex/utils/track-by';
import { schoolsData } from 'src/static-data/schools';
import { Schools } from '../interfaces/schools';
import icSchool from '@iconify/icons-ic/twotone-school';
import { SchoolsInfoComponent } from '../components/schools-info/schools-info.component';
import { fadeInRight400ms } from 'src/@vex/animations/fade-in-right.animation';
import { fadeInUp400ms } from 'src/@vex/animations/fade-in-up.animation';
import { scaleFadeIn400ms } from 'src/@vex/animations/scale-fade-in.animation';
import { scaleIn400ms } from 'src/@vex/animations/scale-in.animation';
import { stagger40ms } from 'src/@vex/animations/stagger.animation';
import { DialogValidationComponent } from '../components/dialog-validation/dialog-validation.component';
@Component({
  selector: 'vex-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.scss'],
  animations: [
    scaleIn400ms,
    fadeInRight400ms,
    stagger40ms,
    fadeInUp400ms,
    scaleFadeIn400ms
  ]
})
export class SchoolsListComponent implements OnInit {
 
  schools = schoolsData;
  filteredSchools$ = this.route.paramMap.pipe(
    map(paramMap => paramMap.get('activeCategory')),
    map(activeCategory => {
      switch (activeCategory) {
        case 'all': {
          this.star_page=false
          return schoolsData;
          
        }
        case 'Commerce': {
          this.star_page=false
          return schoolsData.filter(c => c.type==="Commerce");
        }
        case 'Engineer': {
          this.star_page=false
          return schoolsData.filter(c => c.type==="Engineer");
        }
        case 'Bts': {
          this.star_page=false
          return schoolsData.filter(c => c.type==="Bts");
        }
        case 'Bashelor': {
          this.star_page=false
          return schoolsData.filter(c => c.type==="Bashelor");
        }

        case 'starred': {
          this.star_page=true
          return schoolsData.filter(c => c.starred);
        }

        default: {
          return [];
        }
      }
    })
  );


  links: Link[] = [
    {
      label: 'ALL schools',
      route: '../all'
    },
    {
      label: 'Commerce',
      route: '../Commerce'
    },
    {
      label: 'Engénieur',
      route: '../Engineer'
    },
    
    {
      label: 'Bts',
      route: '../Bts'
    },
    {
      label: 'Bachelor',
      route: '../Bashelor'
    },
    {
      label: 'Mes Choix',
      route: '../starred'
    }
  ];

  SchoolsList=['INGENIEUR', 'COMMERCE', 'BTS',  'IUT', 'BACHELOR']

  icSchool = icSchool;
  trackById = trackById;
  star_page: boolean;

  constructor(private dialog: MatDialog,
              private route: ActivatedRoute) { }

  ngOnInit() {}

  infoSchool(id?: Schools['id']) {
    this.dialog.open(SchoolsInfoComponent, {
      data: id || null,
      width: '600px'
    });
  }
  

  toggleStar(id: Schools['id']) {
    const school = schoolsData.find(c => c.id === id);

    if (school) {
      school.starred = !school.starred;
    }
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(DialogValidationComponent, dialogConfig);
   
  }
  
}

