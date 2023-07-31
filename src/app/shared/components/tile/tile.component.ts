import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../dialogs/confirmation-dialog/confirmation-dialog.component';
import { TileInterface } from '../../interface/tiles.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tiles',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TilesComponent implements OnInit {
  showDelay = new FormControl(250);
  hideDelay = new FormControl(300);
  statusArr: string[] = ['Continue', 'Start', 'View again', 'Sign up']

  @Input() displayObj!: TileInterface;

  constructor(public dialog: MatDialog,
    private translate: TranslateService) { }

  ngOnInit(): void {
  }

  deleteCourse(name: string, id: number) {
    this.dialog.open(ConfirmationDialogComponent, {
      data: {
        text: this.translate.instant('Tile.YouSureYouWantToLeaveCourse').replace('{{name}}', name),
      }
    }).afterClosed().subscribe(val => {
      if (val) {
        //send to api id of the course
      }
    });
  }
}
