import config from '../config';
import TokenService from '../services/token-service';
import IdleService from '../services/idle-service';

const AuthApiService = {
    postUser(user) {
        return fetch(`${config.API_ENDPOINT}/users`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    postLogin({ user_name, password }) {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            body: JSON.stringify({ user_name, password }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                IdleService.registerIdleTimerResets();
                TokenService.queueCallbackBeforeExpiry(() => {
                    AuthApiService.postRefresh()
                });
                return res;
            })
    },
    postRefresh() {
        return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
            )
            .then(res => {
                TokenService.saveAuthToken(res.authToken);
                return res;
            })
    }
}

export default AuthApiService;