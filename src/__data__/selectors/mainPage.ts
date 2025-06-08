import { createSelector } from "reselect";

const rootSelector = createSelector(
  (state) => state,
  (state:any) => state.productPage
);
export const items = createSelector(rootSelector, (state) => state.data);
export const loading = createSelector(rootSelector, (state) => state.loading);
export const error = createSelector(rootSelector, (state) => state.error);
