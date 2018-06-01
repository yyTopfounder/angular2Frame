import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule} from '@angular/core';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DefaultExceptionTextPipe } from './pipe/default-exception-text.pipe';
import { MainService } from './service/main.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DefaultExceptionTextPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(AppComponent)
  ],
  entryComponents: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    MainService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]
})
export class AppModule { }
