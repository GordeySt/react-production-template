import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(res => {
    // @ts-ignore
    // Do not do that kind of delays in the real projects, just for your local testing
    setTimeout(() => res(import('./AboutPage')), 1500)
}));