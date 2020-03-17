import {Injectable} from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from 'src/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()

export class MemberDetailResolver implements Resolve<User>{
constructor(private userService: UserService, 
            private router: Router, private alertfy: AlertifyService) {

}


resolve(route: ActivatedRouteSnapshot): Observable<User>{
    return this.userService.getUser(route.params['id']).pipe(
    catchError(error =>{
         this.alertfy.error('Problem retriving Data');
         this.router.navigate(['/members']);
         return of(null);          
        } )
    );


}

}
