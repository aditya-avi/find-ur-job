import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private http: HttpClient) { }

  getimg ()
  {
   return(this.http.get<any>('https://picsum.photos/v2/list'))
  }

  getnews()
  {
    
const headers= new HttpHeaders()
.set('X-RapidAPI-Key', '2529473341msh03643604436b520p144249jsn996a9dd7d6b6')
.set('X-RapidAPI-Host', 'contextualwebsearch-websearch-v1.p.rapidapi.com');
  let queryParams = new HttpParams();
  queryParams = queryParams.append("q","jobs");
  queryParams = queryParams.append("pageNumber",1);
  queryParams = queryParams.append("pageSize",15);
  queryParams = queryParams.append("autoCorrect","true");
  queryParams = queryParams.append("fromPublishedDate",null);
  queryParams = queryParams.append("toPublishedDate",null);

  return this.http.get('https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI?q=jobs&pageNumber=1&pageSize=10&autoCorrect=true&fromPublishedDate=null&toPublishedDate=null',
  {params:queryParams, headers: headers })
  }
  
getdegree()
{
  this.http.get('http://localhost:8083/ui/getAllDegree/get')
}

getinst()
{
  this.http.get('http://localhost:8083/ui/getAllInstitution/get')
}

getststs()
{
  return this.http.post('http://localhost:8082/job/jobAppliedStatistics/get/',{
    "loginId": localStorage.getItem('token')
  })
}
 
}
