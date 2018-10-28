import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable()
export class AddSurveyService {

  private _addQuestionsURL:string=environment.survey_api+'/questions/addQuestions';
  private _createSurveyURL:string = environment.survey_api+'/survey';

  constructor(private http:HttpClient) { }

  addQuestions(postParam:any){
    return this.http.post(this._addQuestionsURL,postParam);
  }
  // getSurveyId(){
  //   return this.http.get("https://directed-will-207311.appspot.com/api/survey");
  // }

  createSurvey(postParam:any){
    return this.http.post(this._createSurveyURL,postParam);
  }


}
