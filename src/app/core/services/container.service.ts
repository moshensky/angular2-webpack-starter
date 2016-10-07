import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/filter';
//import 'rxjs/add/operator/map';

import { convertEnumToSelectOptions, DocumentState, PeriodType } from "../enums"
import { ApiService } from "./"

@Injectable()
export class ContainerService {

  constructor(private customHttp: ApiService) { }

  public getContainer(containerId): Promise<any> {
    return this.customHttp.get('/containers/' + containerId).toPromise();
  }

  public getFullPath(nodeId): Promise<any> {
    return this.customHttp.get('/containers/get-path/' + nodeId).toPromise();
  }

  public getAllContainers(): Promise<any> {
    return this.customHttp.get('/containers/all').toPromise();
  }

  public setContainer(container): Promise<any> {
    return this.customHttp.post('/containers', container).toPromise();
  }

  public editContainer(container): Promise<any> {
    return this.customHttp.put('/containers', container).toPromise();
  }

  public deleteContainer(containerId): Promise<any> {
    return this.customHttp.delete('/containers/' + containerId).toPromise();
  }

  public moveContainer(container): Promise<any> {
    return this.customHttp.put('/containers/move', container).toPromise();
  }

  public copyContainer(data): Promise<any> {
    return this.customHttp.put('/containers/copy', data).toPromise();
  }

  public getUserGroups(containerId): Promise<any> {
    return this.customHttp.get('/containers/' + containerId + '/user-groups').toPromise();
  }

  public getAvailableUserGroups(containerId): Promise<any> {
    return this.customHttp.get('/containers/' + containerId + '/available-user-groups').toPromise();
  }

  public addUserGroup(data): Promise<any> {
    return this.customHttp.put('/containers/add-group', data).toPromise();
  }

  public removeUserGroup(data): Promise<any> {
    return this.customHttp.put('/containers/remove-group', data).toPromise();
  }
}
