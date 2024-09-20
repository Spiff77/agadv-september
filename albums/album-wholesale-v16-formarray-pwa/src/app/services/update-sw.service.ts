import {inject, Injectable} from '@angular/core';
import {SwUpdate, VersionReadyEvent} from '@angular/service-worker';
import {filter, Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class UpdateSwService {

  updates: SwUpdate = inject(SwUpdate);

  constructor() {}

  getUpdate():Observable<VersionReadyEvent> {
    return this.updates.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY')
     );
  }

}
