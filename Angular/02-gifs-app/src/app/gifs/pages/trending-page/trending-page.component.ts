import {Component, ElementRef, inject, signal, viewChild} from '@angular/core';
import {GifsService} from '../../services/gifs.service';


@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifService = inject(GifsService);
  protected readonly onscroll = onscroll;


  scrollDivRef = viewChild<ElementRef>('groupDiv');
  onScroll($event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
  }
}
