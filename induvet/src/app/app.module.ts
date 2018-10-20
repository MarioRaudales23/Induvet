import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Header } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import{ HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { AdminPage } from "../pages/admin/admin";
import { AppMaskerModule } from 'brmasker-ionic';
import { AuthService } from '../services/auth.service';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginRegisterProvider } from '../providers/login-register/login-register';
import { ImageDataProvider } from '../providers/image-data/image-data';

import { ProductPage } from "../pages/product/product";
import { DownloadsPage } from '../pages/downloads/downloads';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { ShowproductPage } from "../pages/showproduct/showproduct";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeaderComponent } from './header/header.component';
import { CotizarPage} from "../pages/cotizar/cotizar";
import { GlobalProvider } from '../providers/global/global';

export const firebaseConfig = {
  apiKey: "AIzaSyBZAKqZfYiuQDTF-pDtZsxlO5X72wNFA1Q",
  authDomain: "realva-54c4a.firebaseapp.com",
  databaseURL: "https://realva-54c4a.firebaseio.com",
  projectId: "realva-54c4a",
  storageBucket: "realva-54c4a.appspot.com",
  messagingSenderId: "233461489484"


};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage,
    LoginPage,
    AdminPage,
    DownloadsPage,
    RegisterPage,
    ProfilePage,
    ShowproductPage,
    CotizarPage,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AppMaskerModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ProductPage,
    LoginPage,
    AdminPage,
    DownloadsPage,
    RegisterPage,
    ProfilePage,
    ShowproductPage,
    CotizarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    LoginRegisterProvider,
    AuthService,
    ImageDataProvider,
    AngularFireAuth,
    GlobalProvider
  ]
})
export class AppModule { }
