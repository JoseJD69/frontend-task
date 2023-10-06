export type RepositoryResponse = {
    name: string;
    description: string;
    created_at: string;
    updated_at: string;
}

export type CommitResponse = {
    message: string;
    author: string;
    created_at: string;
}