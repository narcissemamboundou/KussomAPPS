import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-projet-pro',
  templateUrl: './dialog-projet-pro.component.html',
  styleUrls: ['./dialog-projet-pro.component.scss']
})
export class DialogProjetProComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogProjetProComponent>,
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
