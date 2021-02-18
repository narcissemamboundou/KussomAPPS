import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'vex-dialog-projet-form',
  templateUrl: './dialog-projet-form.component.html',
  styleUrls: ['./dialog-projet-form.component.scss']
})
export class DialogProjetFormComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DialogProjetFormComponent>,
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
