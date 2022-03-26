import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Modals, MODAL_RESPONSE } from '../constants/Modals';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  private modalResponse = new Subject<any>();
  private modalSource = new Subject<any>();

  modal$ = this.modalSource.asObservable();
  modalResponse$ = this.modalResponse.asObservable();

  modals = Object.values(Modals);
  params: any = null;

  openModal(modalName, params?): void {
    if (this.modals.indexOf(modalName) === -1) {
      console.error('Modal ' + modalName + ' not found!');
      return;
    }
    this.params = params;
    this.modalSource.next({
      modalName,
      action: this.params?.action || null,
    });
  }

  closeModal(source?: any): void {
    this.modalSource.next({ closeStatus: MODAL_RESPONSE.CLOSE, ...source });
  }

  closeAll(): void {
    this.modalSource.next({ closeStatus: MODAL_RESPONSE.CLOSE_ALL });
  }

  closeModalSuccess(): void {
    this.modalSource.next({ closeStatus: MODAL_RESPONSE.CLOSE_SUCCESS });
  }

  emitResponse(response): void {
    switch (response.closeStatus) {
      case MODAL_RESPONSE.CLOSE:
        this.closeModal();
        break;
      case MODAL_RESPONSE.CLOSE_ALL:
        this.closeAll();
        break;
      case MODAL_RESPONSE.CLOSE_SUCCESS:
        this.closeModalSuccess();
        break;
    }
    this.modalResponse.next(response);
  }
}
