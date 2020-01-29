export default class MockApiService {
  baseUrl = 'https://5e300c25576f9d0014d63ac2.mockapi.io/api/v1/tasks';

  restApi = async (method, task, id) => {
    let url = this.baseUrl;
    let configObjectMethod = {};
  
    switch (method) {
      case 'DELETE':
        configObjectMethod = { method: 'DELETE' };
        url += `/${id}`;
        break;
      case 'POST':
        configObjectMethod = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8', },
          body: JSON.stringify(task),
        };
        break;
      case 'PUT':
        configObjectMethod = {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json;charset=utf-8', },
          body: JSON.stringify(task),
        };
        url += `/${id}`;
        break;
      default:
        configObjectMethod = null;
        break;
    }
  
    const res = await fetch(url, configObjectMethod);
    if (res.ok) return await res.json();
    throw new Error(`Could not fetch, received ${res.status}`);
  }

  getResource = async () => {
    return await this.restApi();
  };

  addTask = async (text) => {
    const task = { text, done: false };
    return await this.restApi('POST', task);
  }

  deleteTask = async (id) => {
    return await this.restApi('DELETE', null, id);
  }

  setTaskStatus = async (id) => {
    const tasks = await this.getResource();
    const { text, done } = tasks.find((task) => task.id === id);
    const task = { text, done: !done };
    return await this.restApi('PUT', task, id);
  }
}