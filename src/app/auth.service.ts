import { User } from "./user";
// Ovo se mora koristiti kada se firebase skripta ubaci u index.html file
declare var firebase: any;
export class AuthService{
    singupUser(user: User){// Dodan kod sa firebase-a
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        
        .catch(function(error) {
            // Handle Errors here.
         console.log(error);
            // ...
          });
    }

    singinUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        
        .catch(function(error) {
            // Handle Errors here.
          console.log(error);
            // ...
          });

        }

        logout(){
            firebase.auth().signOut();
        }
        isAutenticated(){
            var user = firebase.auth().currentUser;

            if (user) {
              // User is signed in.
              return true;
            } else {
              // No user is signed in.
              return false;
            }

          }
}