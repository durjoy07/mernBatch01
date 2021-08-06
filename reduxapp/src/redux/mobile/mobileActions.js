import {BUY_MOBILE} from './mobileTypes'

export const buyMobile = (item) => {
    return {
      type: BUY_MOBILE,
      payload: item
    };
}