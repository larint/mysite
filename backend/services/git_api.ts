import fetch from 'node-fetch'
import { GIT } from '../config/git.config'
import fs from 'fs'

interface createFileData {
    message: string,
    content: string, // Base64encode,
    sha?: string // Required if you are updating a file
}

interface deleteFileData {
    message: string,
    sha: string, // The blob SHA of the file being replaced.
}

class GitAPI {

    getFile = async (path: string) => {
        try {
            let response = await fetch(`https://api.github.com/repos/${GIT.owner}/${GIT.repo}/contents/${path}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.token}`
                }
            })

            return await response.json()
        } catch (err) {
            console.log(err);
            return false
        }
    }

    createFile = async (path: string, data: createFileData) => {
        try {
            let response = await fetch(`https://api.github.com/repos/${GIT.owner}/${GIT.repo}/contents/${path}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.token}`
                },
                body: JSON.stringify(data),
            })
            return await response.json()
        } catch (err) {
            console.log(err);
            return false
        }
    }

    updateFile = async (path: string, data: createFileData) => {
        try {
            let response = await fetch(`https://api.github.com/repos/${GIT.owner}/${GIT.repo}/contents/${path}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.token}`
                },
                body: JSON.stringify(data),
            })
            return await response.json()
        } catch (err) {
            console.log(err);
            return false
        }
    }

    deleteFile = async (path: string, data: deleteFileData) => {
        try {
            let response = await fetch(`https://api.github.com/repos/${GIT.owner}/${GIT.repo}/contents/${path}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.token}`
                },
                body: JSON.stringify(data),
            })
            return await response.json()
        } catch (err) {
            console.log(err);
            return false
        }
    }
}

export { GitAPI }