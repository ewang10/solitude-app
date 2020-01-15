import config from '../config';

const SearchMeditationApiService = {
    formatQueryString(params) {
        const queryItems = Object.keys(params).map(key =>
            `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
        );
        return queryItems.join('&');
    },
    getSearchResults(searchTerm) {
        const params = {
            part: 'snippet',
            q: searchTerm,
            type: 'video',
            order: 'viewCount',
            maxResults: 10,
            key: config.API_KEY
        };
        const queryString = SearchMeditationApiService.formatQueryString(params);
        const searchUrl = 'https://www.googleapis.com/youtube/v3/search?' + queryString;

        return fetch(searchUrl)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    }
}

export default SearchMeditationApiService;