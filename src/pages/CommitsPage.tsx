import {FC} from "react";
import {useParams} from "react-router-dom";


interface CommitsPageProps {
}

export const CommitsPage: FC<CommitsPageProps> = (props: CommitsPageProps) => {
    const {} = props;
    const {repository} = useParams();
    return (
        <div className="relative flex flex-col">
            <div
                className="absolute border-r-2 border-gray-200 bottom-1 top-1 dark:border-gray-800"
                style={{left: "15px", zIndex: -1}}
            ></div>
            <ul>
                <li>
                    <div className="flex">
                        <div
                            className="list-item-indicator w-8 h-8 rounded-full shrink-0 border-8 bg-neutral-400 border-zinc-50"
                        ></div>
                        <a className="list-item-title font-medium py-1 px-2">Heading 1</a>
                    </div>
                    <div className="list-item-description p-2 ml-12 text-neutral-500">
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          reiciendis sed, illum animi nostrum amet nesciunt rerum at.
        </span>
                    </div>
                </li>
            </ul>
        </div>
    )
}