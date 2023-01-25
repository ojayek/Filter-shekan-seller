import {createSelector} from  'reselect';

const homedirectory = state =>state.directory;

export const SelectDirecotySections = createSelector(
    [homedirectory],
     directory=> directory.sections
);