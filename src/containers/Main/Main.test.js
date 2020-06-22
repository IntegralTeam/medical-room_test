import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import { setTemperature, setPressure, setHumidity } from 'store/room/actions';

import Main from '.';

const mockStore = configureStore([]);
const initialState = {
  room: {
    temperature: 25,
    pressure: 760,
    humidity: 45,
  },
};

describe('The Main component', () => {
  let component;
  let store;
  
  beforeEach(() => {
    store = mockStore(initialState);
    component = <Provider store={store}><Main /></Provider>;
  });
  
  it('test actions of store', () => {
    store.dispatch(setTemperature(35));
    store.dispatch(setPressure('N/A'));
    store.dispatch(setHumidity(40));
    
    const actions = store.getActions();
    expect(actions).toEqual([
      { type: 'SET_TEMPERATURE', payload: 35 },
      { type: 'SET_PRESSURE', payload: 'N/A' },
      { type: 'SET_HUMIDITY', payload: 40 },
    ]);
  });
  
  it('render correctly', () => {
    const wrapper = shallow(component);
    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
