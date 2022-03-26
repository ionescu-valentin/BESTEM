import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ModalsService } from 'src/app/_core/services/modals.service';
import { Modals, MODALS_STYLES, MODAL_RESPONSE } from 'src/app/_core/constants/Modals';

@Component({
  selector: 'app-modals-container',
  template: ''
})
export class ModalsContainerComponent implements OnInit {
  modalRef: MatDialogRef<any>;
  modalSubscription: Subscription;

  constructor(private dialog: MatDialog, private modalService: ModalsService) {
    this.modalSubscription = modalService.modal$.subscribe((response: any) => {
      switch (response) {
        case MODAL_RESPONSE.CLOSE:
        case MODAL_RESPONSE.CLOSE_SUCCESS:
          this.closeModal();
          response.source && this.emitCloseEvent(response);
          return;
        case MODAL_RESPONSE.CLOSE_ALL:
          this.dialog.closeAll();
          return;
        default:
          this.setModal(response.modalName);
      }
      this.modalRef.backdropClick().subscribe(() => {
        this.closeModal();
        this.emitCloseEvent({ closeStatus: MODAL_RESPONSE.CLOSE, source: response.action });
      });
    });
  }

  ngOnInit(): void {
  }

  emitCloseEvent(event): void {
    this.modalRef.afterClosed().subscribe(() => {
      this.modalService.emitResponse(event);
    });
  }

  setModal(response: any): void {
    const style = MODALS_STYLES.find((modal) => modal.name === response).style;
    switch (response) {
      case '':
        this.openModal('component', style, true);
        break;
    }
  }

  openModal(modalComponent, style, disableClose: boolean = false, cancel: boolean = false): void {
    if (this.dialog.openDialogs.length && !cancel) {
      this.dialog.closeAll();
    }
    this.modalRef = this.dialog.open(modalComponent, { ...style, disableClose });
  }

  closeModal(): void {
    this.modalRef.close();
  }

}
