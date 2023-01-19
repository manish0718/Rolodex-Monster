import { Component } from "react";

import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div>
              <Card name={name} email={email} id={id} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
