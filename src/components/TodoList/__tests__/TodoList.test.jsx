import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../TodoList';
import { deleteTask, getResource } from '../../../services/mockApiService';

jest.mock('../../../services/mockApiService', () => {
  return {
    getResource: jest.fn(() => Promise.resolve([])),
    addTask: jest.fn(),
    deleteTask: jest.fn(() => Promise.resolve()),
    setTaskStatus: jest.fn(),
  };
})

describe('<TodoList />', () => {
  it('should request tasks list', () => {
    shallow(<TodoList />);
    expect(getResource).toBeCalled();
  });

  it('should handle tasks delete', () => {
    const wrappedComponent = shallow(<TodoList />);
    const deleteHandler =wrappedComponent.find('TasksList').prop('onDelete');
    deleteHandler('id-999')
    expect(deleteTask).toBeCalledWith('id-999');
  });
});