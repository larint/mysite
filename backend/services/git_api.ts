import fetch from 'node-fetch'
import { GIT } from '../config/git.config'

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

            let response2 = await fetch(`https://api.github.com/repos/${GIT.o}/${GIT.r}/contents/${path}`, {
                method: 'get'
            })
            let data2 = await response2.json()

            let response1 = await fetch(data2.download_url, {
                method: 'get'
            })
            let data1 = await response1.json()

            let post = {
                post: data1,
                sha: data2.sha
            }

            return post
        } catch (err) {
            console.log(err);
            return false
        }
    }

    createFile = async (path: string, data: createFileData) => {
        try {
            let response = await fetch(`https://api.github.com/repos/${GIT.o}/${GIT.r}/contents/${path}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.t}`
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
            let response = await fetch(`https://api.github.com/repos/${GIT.o}/${GIT.r}/contents/${path}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.t}`
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
            let response = await fetch(`https://api.github.com/repos/${GIT.o}/${GIT.r}/contents/${path}`, {
                method: 'delete',
                headers: {
                    'Content-Type': 'text/plain',
                    'Authorization': `Bearer ${GIT.t}`
                },
                body: JSON.stringify(data),
            }).then((jsonResponse) => {
                console.log('jsonResponse', jsonResponse);
            }).catch((err) => {
                // handle error
                console.error('err', err);
            });
            return true
        } catch (err) {
            console.log('err ', err);
            return false
        }
    }
}

export { GitAPI }