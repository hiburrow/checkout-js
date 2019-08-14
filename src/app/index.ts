import React from 'react';

import '../scss/App.scss';

if (process.env.NODE_ENV === 'development') {
    // We want to use `require` because we only want to import the package in
    // development mode.
    // tslint:disable-next-line
    const { default: whyDidYouRender } = require('@welldone-software/why-did-you-render');

    whyDidYouRender(React);
}

export { renderCheckout } from '../app/checkout';
export { renderOrderConfirmation } from '../app/order';