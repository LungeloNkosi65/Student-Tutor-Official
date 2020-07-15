import { Injectable } from '@angular/core';
import {SportTournament} from '../Models/sportTournament';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ErrorhandlerService} from '../services/errorhandler.service';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SportTournamentService {

  rootUrl=environment.sportsApiUrl;
 param='SportTournaments/';
 paramGet='GetAll';
 sportTournamentId='?sportTournamentId=';
  constructor(private http:HttpClient,private errorHanlder:ErrorhandlerService) { }

  getSportTournaments():Observable<SportTournament[]>
  {
    return this.http.get<SportTournament[]>(`${this.rootUrl}${this.param}${this.paramGet}`)
    .pipe(catchError(this.errorHanlder.handleError));
  }

  getSingleAssociation(sportTournamentId:number):Observable<SportTournament>{
   return this.http.get<SportTournament>(`${this.rootUrl}${this.param}${this.paramGet}${this.sportTournamentId}${sportTournamentId}`);
   
  }
  addSportTournament(sportTournament:SportTournament){
    return this.http.post(`${this.rootUrl}${this.param}`,sportTournament);
  }
  deleteSportTournament(sportTournamentId:number){
    return this.http.delete(`${this.rootUrl}${this.param}${this.sportTournamentId}${sportTournamentId}`);
  }

  updateSportTournament(sportTournamentId:number,sportTournament:SportTournament){
    return this.http.put(`${this.rootUrl}${this.param}${this.sportTournamentId}${sportTournament}`,sportTournament);
  }
}
