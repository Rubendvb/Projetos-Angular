import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GifsComponent } from './componets/gifs/gifs.component';
import { SearchComponent } from './componets/search/search.component';

const APP_ROUTES: Routes = [
    { path: '', component: SearchComponent },
    { path: 'results/:q', component: GifsComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule { }