import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Hero} from '../models/Hero';
import {HttpClient} from '@angular/common/http';
import {MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://chendawei.top/data1.php';  // URL to web api

  constructor(private http: HttpClient,
              private messageService: MessageService) {
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    // return of(HEROES);
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError('getHeroes', []))
    );
    // return of(HEROES);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return this.http.get<Hero>('http://chendawei.top/data2.php?id=' + id);
  }
}
