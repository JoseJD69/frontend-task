import {ActionType} from "../action-types";
import {Dispatch} from "redux";
import {AppAction} from "../reducers/appReducer";

export const searchRepositories = (repositories: any) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES,
            payload: repositories
        });
    }
}
export const getCommitByRepository = (commits: any) => {
    return (dispatch: Dispatch<AppAction>) => {

        dispatch({
            type: ActionType.GET_COMMITS,
            payload: commits
        });
    }
}