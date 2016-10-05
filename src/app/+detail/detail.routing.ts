import { Detail } from './detail.component';

// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: Detail, pathMatch: 'full' }
];
