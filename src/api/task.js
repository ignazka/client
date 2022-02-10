import { api } from './api';

export function createTask(task) {
  return api.post('/tasks', task);
}

export function editTask(taskID, task) {
  return api.put(`/tasks/${taskID}`, task);
}

export function getTasks() {
  return api.get('/tasks');
}

export function getTaskByID(taskID) {
  return api.get(`/tasks/${taskID}`);
}

export function deleteTask(taskID) {
  return api.delete(`/tasks/${taskID}`);
}
