import axios from 'axios';
import {CommitResponse, RepositoryResponse} from "../interfaces/api_interfaces";


const BASE_URL = 'http://localhost:4000/api/v1';


export const getRepositories = async (): Promise<RepositoryResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${BASE_URL}/github/repositories`);
            const data: RepositoryResponse = response.data;
            resolve(data);
        } catch (e) {
           reject(e);
        }
    });
}
export const getCommitsByRepo = async (repoName: string): Promise<CommitResponse> => {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${BASE_URL}/github/repository/commits/${repoName}`);
            const data: CommitResponse = response.data;
            resolve(data);
        } catch (e) {
            reject(e);
        }
    });
}