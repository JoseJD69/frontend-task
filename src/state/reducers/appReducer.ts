import {ActionType} from "../action-types";

interface AppState {
    repositories: [];
    commits: [];
    loading: boolean;
}

const initialState: AppState = {
    repositories: [],
    commits: [],
    loading: false,
};
export type AppAction = {
    type: ActionType;
    payload?: any;
}
const reducer = (state: AppState = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return {...state, loading: true, repositories: action.payload};
        case ActionType.GET_COMMITS:
            return {...state, loading: true, commits: action.payload};
        case ActionType.SET_LOADING:
            return {...state, loading: action.payload};

        default:
            return state;
    }
}

export default reducer;