import { Injectable } from '@angular/core';
import {Firestore , collection , doc, docData, collectionData } from '@angular/fire/firestore';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  
  constructor(private db: Firestore ) {
  }
  userprofileRef = collection(this.db, "users")
   getuser(id:string){
    return docData(doc(this.db, "users/"+id))
  }

  update(username) {
  }
}
