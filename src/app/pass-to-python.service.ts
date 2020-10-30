import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassToPythonService {
  //private myURL='http://127.0.0.1:5000/'


  constructor(private http: HttpClient) { }
  dataContainer=[];

  addToContainer(data) {
    this.dataContainer.push(data);
  }

  getData(){
    return this.dataContainer;
  }

  clearContainer(){
    this.dataContainer=[];
    return this.dataContainer;

  }

  
  sendToBackendGet(): Observable<any>{

   //Do not set headers, this fs up the CORS headers
    return this.http.get("http://127.0.0.1:5000/testpage",{observe: 'response'});
    
  }
  sendFluidProperties(data): Observable<any>{
  
    
    return this.http.post("http://127.0.0.1:5000/send_fluid_properties",data);
    
  }
  sendEquipmentProperties(data): Observable<any>{
  
   
    return this.http.post("http://127.0.0.1:5000/send_equipment_properties",data);
    
  }
  sendSpintestData(data): Observable<any>{
  
   
    return this.http.post("http://127.0.0.1:5000/send_spintest_data",data);
    
  }


}
