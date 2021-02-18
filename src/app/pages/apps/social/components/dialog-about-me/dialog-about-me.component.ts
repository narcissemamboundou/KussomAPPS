import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-about-me',
  templateUrl: './dialog-about-me.component.html',
  styleUrls: ['./dialog-about-me.component.scss']
})
export class DialogAboutMeComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogAboutMeComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
      this.dialogRef.close();
  }

}
