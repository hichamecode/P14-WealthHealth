/**
 * Redux Toolkit createSlice to manage the state of the employees
 * CreateAsyncThunk to handle the creation of employees
 * The data is stored in the local storage
 * typedef {object} dataType
 * It represents the structure of an employee data object
 */
import dataType from "../types/DataType";
export type stateType = {
    employees: dataType[];
};
export declare const initialState: stateType;
export declare const createEmployeeThunk: import("@reduxjs/toolkit").AsyncThunk<dataType, dataType, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
export declare const employeeSlice: import("@reduxjs/toolkit").Slice<stateType, {}, "employees", "employees", import("@reduxjs/toolkit").SliceSelectors<stateType>>;
export declare const actions: import("@reduxjs/toolkit").CaseReducerActions<{}, "employees">, employeeReducer: import("redux").Reducer<stateType>;
export default employeeReducer;
