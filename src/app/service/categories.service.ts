import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private http = inject(HttpClient);
  constructor() {}

  getVideogames() {
    return this.http.get('http://localhost:3000/videogame');
  }

  getGender() {
    return this.http.get('http://localhost:3000/genders');
  }

  getTheme() {
    return this.http.get('http://localhost:3000/themes');
  }

  getGameMode() {
    return this.http.get('http://localhost:3000/gamemodes');
  }

  getPegi() {
    return this.http.get('http://localhost:3000/pegis');
  }

  getProducts(filter?: string, value?: string) {
    let endpoint = 'http://localhost:3000/videogame';
    if (filter && value) {
      endpoint = `${endpoint}?${filter}=${value}`;
    }
    return this.http.get(endpoint);
  }

  getVideogameSearch(name?: String) {
    let endpoint = 'http://localhost:3000/videogame/';
    if (name) {
      endpoint = `${endpoint}${name}`;
    }

    return this.http.get(endpoint);
  }
}
