import type * as resources from '../src/translations/resources';
import { type defaultNS } from '../src/translations';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: (typeof resources)['en'];
  }
}
