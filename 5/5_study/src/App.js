import RefSample from './RefSample';
import ScrollSample from './ScrollBox';
import ValidationSample from './ValidationSample';
import {Component} from "react";

class App extends Component {
  render() {
  return (
    <>
    <ValidationSample/>
    <RefSample/>
    <ScrollSample ref={(ref) => this.ScrollSample=ref}/>
    <button onClick={() => this.ScrollSample.scrollToBottom()}>맨 밑으로</button>
    </>
  );
}
}
export default App;
