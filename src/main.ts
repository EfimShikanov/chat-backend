import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIgS38zRsWjPLBR9-Di4U9tBKjegbySkw",
  authDomain: "chat-backend-f76cb.firebaseapp.com",
  projectId: "chat-backend-f76cb",
  storageBucket: "chat-backend-f76cb.appspot.com",
  messagingSenderId: "786485721491",
  appId: "1:786485721491:web:fb71ec0d19d265e2fad066",
  measurementId: "G-C06M9PR13J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    snapshot: true,
  });
  await app.listen(3000);
}
bootstrap();
