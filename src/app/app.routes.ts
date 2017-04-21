import { RouterModule, Route } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { LoginComponent } from './login/login.component';

const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'view', component: ViewComponent },
    { path: 'add', component: AddComponent },
    { path: 'add/:id', component: AddComponent }
]

export const RoutesProvider = RouterModule.forRoot(routes);