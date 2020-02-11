import React from 'react';
import { shallow } from 'enzyme';
import Task from '../Task';

describe('<Task />', () => {
  it('should display done task', () => {
    const props = {
      id: 'id-0',
      done: true,
      text: 'Test text',
      onDelete: jest.fn(),
      onToggleDone: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should display undone task', () => {
    const props = {
      id: 'id-0',
      done: false,
      text: 'Test text',
      onDelete: jest.fn(),
      onToggleDone: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />);
    expect(wrappedComponent).toMatchSnapshot();
  });

  it('should udate event on checkbox checked', () => {
    const props = {
      id: 'id-0',
      done: false,
      text: 'Test text',
      onDelete: jest.fn(),
      onToggleDone: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find('.list-item__checkbox').simulate('change');
    expect(props.onToggleDone).toBeCalledWith('id-0');
  });

  it('should delete task', () => {
    const props = {
      id: 'id-0',
      done: false,
      text: 'Test text',
      onDelete: jest.fn(),
      onToggleDone: jest.fn(),
    }
    const wrappedComponent = shallow(<Task {...props} />);
    wrappedComponent.find('.list-item__delete-btn').simulate('click');
    expect(props.onDelete).toBeCalledWith('id-0');
  });
});