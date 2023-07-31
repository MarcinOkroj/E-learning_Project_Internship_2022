import { LoadingInterceptorService } from './core/services/loading-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './core/services/auth.service';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import { LangTranslatorLoader } from './core/lang-translator-loader';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    AppRoutingModule,
    SharedModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,

    // Core
    CoreModule,
    LoginModule,
    ApiModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useClass: LangTranslatorLoader
      }
  })
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptorService,
      multi: true,
    },
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}


