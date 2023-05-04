import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

    private baseUrl = 'http://localhost:8080/api/v1/clients';

  constructor(private http: HttpClient) { }

  getAllClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl);
  }

  getClientByName(name: String): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/${name}`);
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  updateClient(name: String, client: Client): Observable<Client> {
    return this.http.put<Client>(`${this.baseUrl}/${name}`, client);
  }

  deleteClient(name: String): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${name}`);
  }
   
}
