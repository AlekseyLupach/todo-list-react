import ContentType from '../constans/content-type';
import HttpMethod from '../constans/http-method';

class ApiService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async get(url) {
    const response = await fetch(`${this.baseUrl}/${url}`, { method: HttpMethod.GET });

    if (!response.ok) {
      throw Error(response.status);
    }

    return response.json();
  }

  async post(url, body) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: HttpMethod.POST,
      body: JSON.stringify(body),
      headers: {
        'Content-Type': ContentType.APPLICATION_JSON,
      },
    });

    if (!response.ok) {
      throw Error(response.status);
    }

    return response.json();
  }

  async delete(url) {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: HttpMethod.DELETE,
    });

    if (!response.ok) {
      throw Error(response.status);
    }

    return response.json();
  }
}

const apiService = new ApiService(process.env.REACT_APP_API_URL);

export default apiService;
