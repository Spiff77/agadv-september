import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {map, mergeMap} from 'rxjs';
import {ToastrService} from 'ngx-toastr';


export const AuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const toasterService = inject(ToastrService);

  return authService.isAuthenticated().pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        toasterService.error('You need to be logged in to access this page', 'ERROR')
        return false
      }else{
        return true
      }
    })
  )
}
