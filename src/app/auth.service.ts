import { User } from "./user";
// Ovo se mora koristiti kada se firebase skripta ubaci u index.html file
declare var firebase: any;
export class AuthService{
    singupUser(user: User){// Dodan kod sa firebase-a
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        
        .catch(function(error) {
            // Handle Errors here.
         console.log(error);
            // ...
          });
    }
}