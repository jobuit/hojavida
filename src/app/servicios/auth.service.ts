import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(public afAuth:AngularFireAuth) { }

  RegistrarUsuarioEmailPassword(email: string, pass: string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData), err => reject(err));
    });
  }

  LoginUsuarioEmailPassword(email: string, pass: string){
    return new Promise((resolve,reject)=>{
      this.afAuth.auth.signInWithEmailAndPassword(email,pass)
      .then(userData => resolve(userData), err => reject(err));
    });
  }

  LoginWithTwitter(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
  }

  LoginWithGoogle(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  LoginWithFacebook(){
    return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  getAuth(){
    return this.afAuth.authState.map(auth=>auth);
  }

  Logout(){
    return this.afAuth.auth.signOut();
  }

}
