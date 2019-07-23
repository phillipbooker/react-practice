import React, {Component} from "react";
import "./style.css";

class FriendCard extends Component{
  render(){
    return (
      <div className="card">
        <div className="img-container">
          <img
            alt={this.props.name}
            src={this.props.image}
            onClick={
              () => {
                this.props.shuffleFriends();
                this.props.wasClicked(this.props.id);
              }
            }
          />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Clicked:</strong> {this.props.clicked.toString()}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FriendCard;
