import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-validation',
  templateUrl: './dialog-validation.component.html',
  styleUrls: ['./dialog-validation.component.scss']
})
export class DialogValidationComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogValidationComponent>,
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
