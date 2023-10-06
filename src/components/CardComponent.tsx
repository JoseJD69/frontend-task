import React, {FC} from 'react';

interface CardComponentProps {
    title: string;
    description: string;
    cratedBy: string;
    onClick: (repo: string) => void;
}

export const CardComponent: FC<CardComponentProps> = (props: CardComponentProps) => {
    const {title, description, cratedBy, onClick} = props;

    return (<div className="max-w-md py-4 px-4 bg-white shadow-lg rounded-lg my-20" onClick={() => onClick(title)}>
        <div>
            <h2 className="text-gray-800 text-3xl font-semibold">{title}</h2>
            <p className="mt-2 text-gray-600">{
                description
            }</p>
        </div>
        <div className="flex justify-end mt-4">
            <a className="text-xl font-medium text-indigo-500">{cratedBy}</a>
        </div>
    </div>)
}