/**
 * RTK createSlice is responsible for fetching address suggestions from the Google Places API.
 */
export declare const fetchAddressSuggestions: import("@reduxjs/toolkit").AsyncThunk<any, void, {
    state?: unknown;
    dispatch?: import("redux-thunk").ThunkDispatch<unknown, unknown, import("redux").UnknownAction>;
    extra?: unknown;
    rejectValue?: unknown;
    serializedErrorType?: unknown;
    pendingMeta?: unknown;
    fulfilledMeta?: unknown;
    rejectedMeta?: unknown;
}>;
declare const _default: import("redux").Reducer<{
    suggestions: any[];
    loading: boolean;
    error: string | null;
}>;
export default _default;
