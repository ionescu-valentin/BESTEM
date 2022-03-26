export enum Modals {
  TEST_MODAL
}

export const MODALS_STYLES = [
  {
    name: Modals.TEST_MODAL,
    style: {
      width: '500px',
      height: 'auto',
      autoFocus: false,
    },
  },
];

export enum MODAL_RESPONSE {
  CLOSE = 'close',
  CLOSE_ALL = 'closeAll',
  CLOSE_SUCCESS = 'closeSuccess',
}
