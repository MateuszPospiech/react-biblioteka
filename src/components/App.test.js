import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportAllDeclaration } from '@babel/types';

configure({adapter: new Adapter()});

describe('App tests', () => {

   it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('should run hello world', () => {
       const wrapper = shallow(<App/>);
       expect(wrapper.find('Header').exists()).toBe(true);
       expect(wrapper.find('Order').exists()).toBe(true);
       expect(wrapper.find('Inventory').exists()).toBe(true);
       expect(wrapper.find('AdminPanel').exists()).toBe(true);
    });
    
});
