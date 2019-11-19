import config from "../config/index"
import firebase from 'firebase/app';
import "firebase/firestore";

export default class FirebaseDAO {
  static saveResult(result){
    firebase.firestore().collection('results').add(result).then(
      result => console.log("resultat inséré")
    )
  }

  static getResultsAdmin(company){
    let result = []
    return firebase.firestore().collection('results').where("company", '==', company).get().then(data => {
      data.forEach(doc => {
        result.push(doc.data())
      });

      return result;
    })
  }
}
