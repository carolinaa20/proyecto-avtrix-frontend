import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideogamesService {
  private http = inject(HttpClient);

  constructor() {}

  getVideogames() {
    return this.http.get('http://localhost:3000/videogames');
  }

  private apiUrl = 'http://localhost:3000/videogames';

  getVideogamesPages(page: number, limit: number) {
    return this.http.get<any>(`${this.apiUrl}?page=${page}&limit=${limit}`);
  }

  getOneVideogameByName(id: string) {
    return this.http.get('http://localhost:3000/videogamebyid/' + id);
  }

  getVideogamesOfFeatured() {
    return this.http.get(
      'http://localhost:3000/videogames?typeoffer=Featured'
    );
  }

  getVideogamesOfOnSale() {
    return this.http.get(
      'http://localhost:3000/videogames?typeoffer=On Sale'
    );
  }
}
