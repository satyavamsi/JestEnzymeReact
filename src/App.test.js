import React from 'react';
// setup file
import { shallow, mount } from 'enzyme';
import Counter from './Counter';
import App from './App';

describe("counter testing", () => {
  
  let wrapper;

  beforeEach(() => {
    // wrapper = shallow(<Counter />);
    wrapper = mount(<App />);
  });

  test('render title of the counter', () => {
    expect(wrapper.find('h1').text()).toContain('This is counter');
  });

  test('render a button', () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  });

  test('render state in div', () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

  test('render incremented count on clicking up counter', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  });

  test('render decremented count on clicking down counter', () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
    wrapper.find('#decrement-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("0");
  });

});


