/**
 * Redux store configuration for the app
 */
export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    theme: {
        isDarkMode: boolean;
    };
    employees: import("./employeesSlice").stateType;
    address: {
        suggestions: any[];
        loading: boolean;
        error: string | null;
    };
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        theme: {
            isDarkMode: boolean;
        };
        employees: import("./employeesSlice").stateType;
        address: {
            suggestions: any[];
            loading: boolean;
            error: string | null;
        };
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
