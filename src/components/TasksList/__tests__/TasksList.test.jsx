import React from 'react';
import { shallow } from 'enzyme';
import TasksList from '../TasksList';

describe('<TasksList />', () => {
  it('should display tasks list sorted by "done"', () => {
    const props = {
      tasks: [
        { id: 'id-0', text: 'Task 1', done: true },
        { id: 'id-1', text: 'Task 2', done: false },
        { id: 'id-2', text: 'Task 3', done: true },
      ],
      onDelete: jest.fn(),
      onToggleDone: jest.fn(),
    }
    const wrappedComponent = shallow(<TasksList {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });
});