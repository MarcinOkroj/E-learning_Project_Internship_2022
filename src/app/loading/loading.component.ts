import { LoadingService } from './../core/services/loading.service';
import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit, OnDestroy {
  loadingSubscription: Subscription = new Subscription();
  showLoader: boolean = false;
  constructor(private loadinScreanService: LoadingService) {}

  ngOnInit(): void {
    this.loadingSubscription.add(
      this.loadinScreanService.loading$.subscribe((val) => {
        this.showLoader = val;
      })
    );
  }

  ngOnDestroy(): void {
    this.loadingSubscription.unsubscribe();
  }
}
