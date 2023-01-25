import {createSelector} from  'reselect';

const shopselector = state =>state.shop;

 export const ShopSelector = createSelector(
    [shopselector],
    shop =>shop.collections
);

export const collectionfroPreview =createSelector(
    [ShopSelector],
    collections =>Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParams =>createSelector(
    [ShopSelector],
    collections=>collections[collectionUrlParams]
    
);

export default ShopSelector;