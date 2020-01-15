import config from '../config';
import TokenService from '../services/token-service';

const JournalApiService = {
    getJournals() {
        return fetch(`${config.API_ENDPOINT}/journals`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getJournal(journal_id) {
        return fetch(`${config.API_ENDPOINT}/journals/${journal_id}`, {
            method: 'GET',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postJournal(journal) {
        return fetch(`${config.API_ENDPOINT}/journals`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(journal)
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteJournal(journal_id) {
        return fetch(`${config.API_ENDPOINT}/journals/${journal_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res => {
                if (!res.ok) return res.json().then(e => Promise.reject(e))
            })
    },
    patchJournal(journal_id, journal) {
        return fetch(`${config.API_ENDPOINT}/journals/${journal_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(journal)
        })
            .then(res => {
                if (!res.ok) return res.json().then(e => Promise.reject(e))
            })
    }
}

export default JournalApiService;