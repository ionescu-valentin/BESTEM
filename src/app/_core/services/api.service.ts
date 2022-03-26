import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl;

  constructor(
    private http: HttpClient,
  ) {
    this.apiUrl = "";
  }

  get(path: string, params = {}, headers = {}) {
    return this.http.get(`${this.apiUrl}${path}`, { params, headers });
  }

  put(path: string, body = {}, params = {}) {
    return this.http.put(`${this.apiUrl}${path}`, body, { params });
  }

  post(path: string, body = {}, params = {}, headers = {}) {
    return this.http.post(`${this.apiUrl}${path}`, body, { params, headers });
  }

  delete(path: string, params = {}) {
    return this.http.delete(`${this.apiUrl}${path}`, { params });
  }
}
