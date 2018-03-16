import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EliteApi {
    private baseUrl = 'https://elitescheduleapp-db0d9.firebaseio.com/';
    constructor(private http: Http) {
    }

    getTournaments() {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`).subscribe(data => {
                resolve(data.json());
            });
        });
    }

    getTeams(tournamentId) {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}/teams.json`).subscribe(data => {
                resolve(data.json());
            });
        });
    }

    getStandings(tournamentId) {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}/standings.json`).subscribe(data => {
                resolve(data.json());
            });
        });
    }

    getGames(tournamentId) {
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments-data/${tournamentId}/games.json`).subscribe(data => {
                resolve(data.json());
            });
        });
    }
}

