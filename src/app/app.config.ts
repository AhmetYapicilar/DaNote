import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danoteapp","appId":"1:608667289963:web:e6902e311ed3c9ca38642e","storageBucket":"danoteapp.appspot.com","apiKey":"AIzaSyAZD--zpNNIqj17M2haGDip9GV7b-LHVSQ","authDomain":"danoteapp.firebaseapp.com","messagingSenderId":"608667289963"})), provideFirestore(() => getFirestore())]
};
