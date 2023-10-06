import React, {FC, useCallback, useEffect} from "react";
import {CardComponent} from "../components/CardComponent";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators, State} from "../state";
import {getRepositories} from "../api/GitHubApi";
import {useNavigate} from "react-router-dom";

export const HomePage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {searchRepositories, getCommitByRepository} = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: State) => state.app)

    const handleSearch = useCallback(() => {
        getRepositories().then((response) => {
            searchRepositories(response)
            getCommitByRepository([])
        })
    }, [searchRepositories, getCommitByRepository])
    const handleGetCommits = (repo: string) => {
        navigate(`/commits/${repo}`)
    }

    useEffect(() => {
        handleSearch()
    }, [handleSearch])
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-3 gap-4">
                {
                    state.repositories.length > 0 && state.repositories.map((item: any, index) => {
                        return (
                            <CardComponent
                                key={index}
                                description={item.description}
                                title={item.name}
                                cratedBy={item.name}
                                onClick={handleGetCommits}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}