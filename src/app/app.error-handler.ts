import {Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'

//Classe Genêrica de error, usando inicialmente em restaurantsService em catch
export class ErrorHandler{

  //Método Statico
  static handleError(error: Response | any){
      let errorMessage: string
      if(error instanceof Response){
        errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
      } else {
          errorMessage = error.toString()
      }
      console.log(errorMessage)
      return Observable.throw(errorMessage)
  }
}
