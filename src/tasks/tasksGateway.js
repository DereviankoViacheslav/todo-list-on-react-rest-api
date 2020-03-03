const baseUrl = 'https://5e300c25576f9d0014d63ac2.mockapi.io/api/v1/tasks';

const restApi = async (method, task, id) => {
  let url = baseUrl;
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
      url += `/${task.id}`;
      break;
    default:
      configObjectMethod = null;
      break;
  }

  const res = await fetch(url, configObjectMethod);
  if (res.ok) return await res.json();
  throw new Error(`Could not fetch, received ${res.status}`);
};

const fetchTasks = async () => {
  return await restApi();
};

const addTask = async (task) => {
  return await restApi('POST', task);
};

const deleteTask = async (id) => {
  return await restApi('DELETE', null, id);
};

const updateTask = async (task) => {
  return await restApi('PUT', task);
}

export { addTask, deleteTask, updateTask, fetchTasks };