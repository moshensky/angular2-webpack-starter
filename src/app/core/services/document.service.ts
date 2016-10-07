// todo: refactor to MANY services
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
//import 'rxjs/add/operator/do';
//import 'rxjs/add/operator/delay';

import { ApiService } from "./api.service"

import { convertEnumToSelectOptions, DocumentState, PeriodType } from "app/core"

// todo: remove promises
@Injectable()
export class DocumentService {
  private options = {
    states: convertEnumToSelectOptions(DocumentState),
    versions: [{
      name: 'Version 1',
      id: 1
    }, {
      name: 'Version 2',
      id: 2
    }],
    expirationPeriodTypes: convertEnumToSelectOptions(PeriodType),
  }

  constructor(private customHttp: ApiService) { }

  public getDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units?page=' + page + '&count=' + size).toPromise();
  }

  public getMonitoredDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units/monitored?page=' + page + '&count=' + size).toPromise();
  }

  public getAssignedDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units/assigned?page=' + page + '&count=' + size).toPromise();
  }

  public getLockedDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units/locked?page=' + page + '&count=' + size).toPromise();
  }

  public getDocument(id): Promise<any> {
    if (id === undefined) {
      return Observable.of([]).toPromise();
    }

    return this.customHttp.get('document-units/' + id).toPromise();
  }

  public setDocument(document): Promise<any> {
    return this.customHttp.post('document-units', document).toPromise();
  }

  public editDocument(document): Promise<any> {
    return this.customHttp.put('document-units', document).toPromise();
  }

  public deleteDocument(documentId): Promise<any> {
    return this.customHttp.delete('document-units/' + documentId).toPromise();
  }

  public moveDocument(document): Promise<any> {
    return this.customHttp.put('document-units/move', document).toPromise();
  }

  public copyDocument(data): Promise<any> {
    return this.customHttp.put('document-units/copy', data).toPromise();
  }

  public relateDocument(documentToRelate): Promise<any> {
    return this.customHttp.put('document-units/relate', documentToRelate).toPromise();
  }

  public unrelateDocument(documentToUnrelate): Promise<any> {
    return this.customHttp.put('document-units/unrelate', documentToUnrelate).toPromise();
  }

  public lock(id): Promise<any> {
    return this.customHttp.put('document-units/lock/', { id: id }).toPromise();
  }

  public unlock(id): Promise<any> {
    return this.customHttp.put('document-units/unlock/', { id: id }).toPromise();
  }

  // todo: rename to getDocumentUnitVersionOptions or delete where ...., or/and expiration period types
  public getOptions(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.options);
    });
  }

  public getAvailableEFormTemplates(documentId): Promise<any> {
    return this.customHttp.get('document-units/' + documentId + '/available-e-form-templates').toPromise();
  }

  public getMonitoredUsers(documentId): Promise<any> {
    if (documentId === undefined) {
      return Observable.of([]).toPromise();
    }

    return this.customHttp.get('document-units/' + documentId + '/monitorable-users').toPromise();
  }

  public monitorDocumentUnit(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/monitor', documentUnit).toPromise();
  }

  public unmonitorDocumentUnit(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/unmonitor', documentUnit).toPromise();
  }

  public getAssignableUsers(documentId): Promise<any> {
    if (documentId === undefined) {
      return Observable.of([]).toPromise();
    }

    return this.customHttp.get('document-units/' + documentId + '/assignable-users').toPromise();
  }

  public assignDocumentUnit(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/assign', documentUnit).toPromise();
  }

  public unassignDocumentUnit(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/unassign', documentUnit).toPromise();
  }

  public getTags(documentId): Promise<any> {

    return this.getDocument(documentId);

  }

  public addTag(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/tag', documentUnit).toPromise();
  }

  public removeTag(documentUnit): Promise<any> {

    return this.customHttp.put('document-units/untag', documentUnit).toPromise();
  }

  public getExpiringDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units/expiring?page=' + page + '&count=' + size).toPromise();
  }

  public getExpiredDocuments(page, size): Promise<any> {
    return this.customHttp.get('document-units/expired?page=' + page + '&count=' + size).toPromise();
  }
}
