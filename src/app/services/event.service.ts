import { Injectable } from '@angular/core';
import {Event} from '../Models/event';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ErrorhandlerService} from '../services/errorhandler.service';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  rootUrl=environment.sportsApiUrl;
  param='Events';
  paramGet='/GetAll'
  eventId='?eventId='
  constructor(private http:HttpClient,private errorHandler:ErrorhandlerService) { }

  getEvents():Observable<Event[]>{
    return this.http.get<Event[]>(`${this.rootUrl}${this.param}${this.paramGet}`)
    .pipe(catchError(this.errorHandler.handleError));
  }

  getSingleEvent(eventId:number):Observable<Event>{
  return  this.http.get<Event>(`${this.rootUrl}${this.param}${this.eventId}${eventId}`);
  }

  addEvent(event:Event){
    return this.http.post(`${this.rootUrl}${this.param}`,event);
  }

  // updatestbId(tbId:number,event:Event){
  //   this.http.put(`${this.rootUrl}${this.param}${this.eventId}${tbId}`,tbId,tbId);
  //   // 
  // }
}
