import { Component, OnInit } from '@angular/core';
import icCloudDownload from '@iconify/icons-ic/twotone-cloud-download';

@Component({
  selector: 'vex-mes-documents',
  templateUrl: './mes-documents.component.html',
  styleUrls: ['./mes-documents.component.scss']
})
export class MesDocumentsComponent implements OnInit {

  constructor() { }
  icCloudDownload = icCloudDownload;

  ngOnInit(): void {
  }

}
