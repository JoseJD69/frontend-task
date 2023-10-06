import {FC, useCallback, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {State} from "../state";
import {getCommitsByRepo} from "../api/GitHubApi";
import {actionCreators} from "../state";

interface CommitsPageProps {
}

export const CommitsPage: FC<CommitsPageProps> = (props: CommitsPageProps) => {
    const {} = props;
    const {repository} = useParams();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {getCommitByRepository} = bindActionCreators(actionCreators, dispatch)
    const state = useSelector((state: State) => state.app)

    const handleGetCommits = useCallback(() => {
        setLoading(true)
        getCommitsByRepo(String(repository)).then((response) => {
            getCommitByRepository(response)
            setLoading(false)
        }).catch((_) => {
            setLoading(false)
        })
    }, [getCommitByRepository])

    useEffect(() => {
        handleGetCommits()
    }, [])

    return (
        <div>
            <h1 className="font-medium text-xl py-5">Commits History</h1>

            {
                loading ? <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
  <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
  >Loading...</span
  >
                </div> : <div className="relative flex flex-col">
                    <div
                        className="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800"
                        style={{left: "15px", zIndex: -1}}
                    >

                    </div>
                    <ul>
                        {
                            state.commits.length > 0 && state.commits.map((commit: any, index) => {
                                return (
                                    <li key={index}>
                                        <div className="flex">
                                            <div
                                                className="list-item-indicator w-8 h-8 rounded-full shrink-0 border-8 bg-neutral-400 border-zinc-50"
                                            >

                                            </div>
                                            <a className="list-item-title font-medium py-1 px-2">{commit.author}</a>
                                            <a className="list-item-description text-neutral-500 font-normal py-1 px-2">{commit.created_at}</a>
                                        </div>
                                        <div className="list-item-description p-2 ml-12 text-neutral-500">
        <span>
            {commit.message}
        </span>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            }
            {
                !loading && state.commits.length === 0 &&
                <div className="text-left py-5">
                    <span className="text-normal">No commits found</span>
                </div>
            }
        </div>

    )
}