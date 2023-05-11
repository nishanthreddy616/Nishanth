import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.openai.com/v1/images/generations';

  constructor(private http: HttpClient) {

  }
 getWeather(lat:any,long:any): Observable<any> {
   return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=e532519efa2ede48c4c1abe1e26004c0`);
 }
  generateImage(prompt: string): Observable<any> {
  const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer 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');

  const body = {
    model: 'image-alpha-001',
    prompt: prompt,
    num_images: 1,
    size: '512x512',
    response_format: 'url'
  };

  return this.http.post<any>(this.apiUrl, body, { headers: headers });
}

}
