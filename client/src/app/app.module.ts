import { NgModule, enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule }    from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { TextMaskModule } from 'angular2-text-mask';
import { NouisliderModule } from 'ng2-nouislider';
import { FocusModule } from 'angular2-focus';
import { NgxCarouselModule } from 'ngx-carousel';
import { MomentModule } from 'angular2-moment';

import { MatButtonModule, MatTabsModule, MatListModule, MatGridListModule, MatCardModule, MatCheckboxModule, MatIconModule, MatInputModule, MatSnackBarModule, MatProgressSpinnerModule, MatSnackBar } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';

import { ArrayPipe } from './pipes/array.pipe';
import { FromNowPipe } from './pipes/from-now.pipe';
import { CurrencyPipe } from './pipes/currency.pipe';

import { UserService } from './services/user.service';
import { CarService } from './services/car.service';
import { PostService } from './services/post.service';
import { MenuService } from './services/menu.service';

import { MakeListComponent } from './components/make-list/make-list.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { CarSelectorComponent } from './components/car-selector/car-selector.component';
import { YearListComponent } from './components/year-list/year-list.component';
import { SearchComponent } from './components/search/search.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './components/register/register.component';
import { UniqueValidatorDirective } from './directives/unique-validator.directive';
import { FiltersComponent } from './components/filters/filters.component';
import { PostAddComponent } from './components/post-add/post-add.component';
import { ModalComponent } from './components/modal/modal.component';
import { ColorListComponent } from './components/color-list/color-list.component';
import { CarFormInfoComponent } from './components/car-form-info/car-form-info.component';
import { CarFormEngineComponent } from './components/car-form-engine/car-form-engine.component';
import { CarFormPostComponent } from './components/car-form-post/car-form-post.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { CarBodyComponent } from './components/car-body/car-body.component';
import { CarFormPublishComponent } from './components/car-form-publish/car-form-publish.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CarFormPicturesComponent } from './components/car-form-pictures/car-form-pictures.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PriceRangeComponent } from './components/price-range/price-range.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'posts',      component: PostListComponent },
  { path: 'post/:id',      component: PostDetailsComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'new', component: PostAddComponent },
  { path: 'user/profile', component: UserProfileComponent },
  { path: 'user/posts', component: UserPostsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ArrayPipe,
    FromNowPipe,
    MakeListComponent,
    ModelListComponent,
    CarSelectorComponent,
    YearListComponent,
    SearchComponent,
    PostComponent,
    PostListComponent,
    HomeComponent,
    ErrorComponent,
    MainMenuComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    UniqueValidatorDirective,
    FiltersComponent,
    CurrencyPipe,
    PostAddComponent,
    ModalComponent,
    ColorListComponent,
    CarFormInfoComponent,
    CarFormEngineComponent,
    CarFormPostComponent,
    OptionListComponent,
    CarBodyComponent,
    CarFormPublishComponent,
    PostDetailsComponent,
    CarFormPicturesComponent,
    UserPostsComponent,
    UserProfileComponent,
    PriceRangeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    TextMaskModule,
    NouisliderModule,
    FocusModule,
    NgxCarouselModule,
    MomentModule,
    MatButtonModule,
    MatTabsModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
  ],
  providers: [UserService, CarService, PostService, MenuService, MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
