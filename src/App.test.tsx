// import * as React from 'react';
// import { shallow, mount, render } from 'enzyme';
// import App from './App';
//
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// Enzyme.configure({ adapter: new Adapter() });
//
// const htmlText = {
//   clickZero: '<div class="App"><header class="App-header"><p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a><h1>hawt</h1><button id="pressMeButton">Counter</button><p>Current: 0</p><div>Hmmm:<p>Hi Momma!!!</p></div><div>Hmmm2:<p>Hi Cool!!!</p></div></header></div>',
//   clickOne: '<div class="App"><header class="App-header"><p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a><h1>hawt</h1><button id="pressMeButton">Counter</button><p>Current: 1</p><div>Hmmm:<p>Hi Papa!!!</p></div><div>Hmmm2:<p>Hi Alright!!!</p></div></header></div>',
//   clickTwo: '<div class="App"><header class="App-header"><p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a><h1>hawt</h1><button id="pressMeButton">Counter</button><p>Current: 2</p><div>Hmmm:<p>Hi Controller!!!</p></div><div>Hmmm2:<p>Hi GetUp!!!</p></div></header></div>',
//   clickThree: '<div class="App"><header class="App-header"><p>Edit <code>src/App.js</code> and save to reload.</p><a class="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a><h1>hawt</h1><button id="pressMeButton">Counter</button><p>Current: 3</p><div>Hmmm:<p>Hi Soups!!!</p></div><div>Hmmm2:<p>Hi GetDown!!!</p></div></header></div>'
// };
//
// describe('<App />', () => {
//   it('autopasses', () => {
//     const wrapper = shallow(<App />);
//   });
//
//   it('default state values', () => {
//     const wrapper = shallow(<App />);
//
//     const expectedDefaultState: any = {
//       userType: null,
//       firstName: 'Whelp',
//       lastName: 'delp',
//       middleName: 'hawt',
//       counter: 0,
//       salary: null
//     }
//
//     expect(wrapper.state().userType).toEqual(expectedDefaultState.userType);
//     expect(wrapper.state().firstName).toEqual(expectedDefaultState.firstName);
//     expect(wrapper.state().lastName).toEqual(expectedDefaultState.lastName);
//     expect(wrapper.state().middleName).toEqual(expectedDefaultState.middleName);
//     expect(wrapper.state().counter).toEqual(expectedDefaultState.counter);
//     expect(wrapper.state().salary).toEqual(expectedDefaultState.salary);
//   });
//
//
//   it('pressing the button once, increases counter', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('#pressMeButton').simulate('click');
//     expect(wrapper.state().counter).toEqual(1);
//   });
//
//   it('pressing the button 4 times resets the counter', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     expect(wrapper.state().counter).toEqual(0);
//   });
//
//   it('testing JSX without any button presses', () => {
//     const wrapper = shallow(<App />);
//     expect(wrapper.html()).toEqual(htmlText.clickZero);
//   });
//
//   it('testing JSX after pressing the button', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('#pressMeButton').simulate('click');
//     expect(wrapper.html()).toEqual(htmlText.clickOne);
//   });
//
//   it('testing JSX after two button presses', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     expect(wrapper.html()).toEqual(htmlText.clickTwo);
//   });
//
//   it('testing JSX after three button presses', () => {
//     const wrapper = shallow(<App />);
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     wrapper.find('#pressMeButton').simulate('click');
//     expect(wrapper.html()).toEqual(htmlText.clickThree);
//   });
// });
