import {Component, computed, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';
import {map} from 'rxjs';
import {GifsService} from '../../services/gifs.service';
import {GifsListComponent} from '../../components/gifs-list/gifs-list.component';

@Component({
  selector: 'app-gif-history',
  imports: [
    GifsListComponent
  ],
  templateUrl: './gif-history.component.html',
})
export default class GifHistoryComponent {

  // query= inject(ActivatedRoute).params.subscribe((params) => {
  //   // console.log(params);
  // });

  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query']),
    )
  );

  gifService = inject(GifsService)
  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })

}
