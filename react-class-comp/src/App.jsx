import React from 'react'

import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props),
      this.state = {
        Person: {
          fullName: "Memmi",
          bio: "crafting codes everywhere",
          imgSrc: "https://placeholder.image",
          profession: "cpu overclocker"
        },
        showPerson: true,
        secondsElapsed: 0,

      };

      this.timerID = null
  }

  showHideProfile = () => {
    this.setState({
      showPerson: !this.state.showPerson
    })
  }

 componentDidMount() {
    // Set up an interval to update the time every second
    this.timerID = setInterval(() => {
      this.setState(prevState => ({
        secondsElapsed: prevState.secondsElapsed + 1,
      }));
    }, 1000);
  }


  componentWillUnmount() {
    // Clear the interval when the component is unmounted to prevent memory leaks
    clearInterval(this.timerID);
  }
  


  render() {
    return (
      <div>
        <div> {this.state.showPerson && <p>{this.state.Person.fullName}</p>}</div>
        <button onClick={this.showHideProfile} style={{position: "sticky"}}>show/hide</button>
        <p>Time since last mounted: {this.state.secondsElapsed} seconds</p>
      </div>
    )
  }

}
export default App
