import React, {Component} from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component{
  state = {
    friends: friends,
    score: 0
  };

  wasClicked = id => {
    var newFriends = this.state.friends;
    var alreadyClicked;
    for(let i = 0; i < newFriends.length; i++){
      if(newFriends[i].id === id){
        alreadyClicked = newFriends[i].clicked;
        newFriends[i].clicked = !newFriends[i].clicked;
      }
    }

    if(alreadyClicked){
      for(let j = 0; j < newFriends.length; j++){
        alreadyClicked = newFriends[j].clicked;
        newFriends[j].clicked = false;
      }
      this.setState({
        friends: newFriends,
        score: 0
      });
    } else {
      this.setState({
        friends: newFriends,
        score: this.state.score + 1
      });
    }
  }

  // Fisher-Yates shuffle
  shuffle = () => {
    var j, x, i;
    var a = this.state.friends;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    this.setState({friends: a});
  }

  render() {
    return(
      <Wrapper>
        <h1 className="title">Memory Game</h1>
        <h2>Score: {this.state.score}</h2>
        {
          this.state.friends.map(friend => 
            <FriendCard image={friend.image}
            key={friend.id}
            clicked={friend.clicked}
            shuffleFriends={this.shuffle}
            wasClicked={this.wasClicked}
            id={friend.id}/>
          )
        }
      </Wrapper>
    );
  }
}

export default App;
