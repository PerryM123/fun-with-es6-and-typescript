import * as React from 'react';
// import logo from './logo.svg';
// import './App.css';

// I should put an interface for this app???

interface IState {
  userType: string,
  firstName: string,
  lastName: string,
  middleName: string,
  counter: number,
  salary: number
}

interface IProps {

}


export default class App extends React.Component<IProps, IState> {

  constructor(props: any) {
    super(props);
    this.state = {
      userType: null,
      firstName: 'Whelp',
      lastName: 'delp',
      middleName: 'hawt',
      counter: 0,
      salary: null
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(): void {
    if (this.state.counter === 3) {
      this.setState({
        counter: 0
      });
    } else {
      this.setState({
        counter: this.state.counter + 1
      });
    }
  }

  showSomeJSX(): JSX.Element {
    let famWord: string[] = ["Momma", "Papa", "Controller", "Soups"];
    return (
      <p>Hi {famWord[this.state.counter]}!!!</p>
    );
  }

  showSomeOddJSX(): JSX.Element {
    let famWord: string[] = ["Cool", "Alright", "GetUp", "GetDown"];
    return (
      <p>Hi {famWord[this.state.counter]}!!!</p>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{this.state.middleName}</h1>
          <button id="pressMeButton" onClick={this.handleOnClick}>Counter</button>
          <p>Curre123nt: {this.state.counter}</p>
          <div>
          Hmmm:
          {
            this.showSomeJSX()
          }
          </div>
          <div>
          Hmmm2:
          {
            this.showSomeOddJSX()
          }
          </div>
        </header>
      </div>
    );
  }
}
