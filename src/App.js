import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement
//You can see in the App class that Component and moment are both being used in the render() method.
//They are being imported from the node_modules folder.

class App extends Component {
  // all of the visible content of our app is contained within this App class.
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1>Now</h1>
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of HTML syntax.
          JSX lets us include JavaScript functions right along with the HTML, and also
          allows us to add in components, which are separate, self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />

      </div>
    );
  }
}

export default App;

//By including the export line, we are allowing other files to import things from the App.js file.
