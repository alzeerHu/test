import { createSelector } from "reselect";

const selectCourse = state => state.courseReducer;


export const selectList = createSelector(
    [selectCourse],
    item => item.courses_listt
)