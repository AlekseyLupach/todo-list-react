class ApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async get(url) {
        const response = await fetch(`${this.baseUrl}/${url}`, { method: 'GET' });

        if (!response.ok) {
            throw Error(response.status);
        }

        const json = await response.json();

        return json;
    }

    async post(url, body) {
        const response = await fetch(`${this.baseUrl}/${url}`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw Error(response.status);
        }

        const json = await response.json();

        return json;
    }
}

const apiService = new ApiService('http://localhost:3001');

export default apiService;