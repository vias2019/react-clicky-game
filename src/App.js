import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Title from "./components/Title";
import cards from "./cards.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  // const[cards]=useState();
  // const[ count, setCount] = useState(0);
  
  state = {
    cards,
    count: 0
  };

handleScore =() => {
  this.setState({count: this.state.count + 1});
};

  render() {
    return (
      <Wrapper>
      <Title>Clicky Game<br></br>Click on Image to begin!.....</Title>
      {this.state.cards.map(card => (
        <Card
          id={card.id}
          name={card.name}
          image={card.image}
        />
      ))}
      </Wrapper>
    );
  }

  shuffle = (array)=> {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  
  };


  shuffleCard = () => {
   
    if (this.props.clicked){
      alert ("Game over");
    }else {
      this.props.clicked=true;
      this.shuffle(this.cards);
      this.handleScore();
    }
  };
};
export default App;

// var numbersNew = [];
// console.log(numbersNew);
// function randomCalc() {
//   while (numbersNew.length < 9) {
//     var random = parseInt([Math.floor(Math.random() * 9)]);

//     console.log(random);
//     if (numbersNew.includes(random)) {
//       console.log("did not add anything to the array");
//     } else {
//       numbersNew.push(random);
//       console.log("added to the array");
//     }
//   }
// }
// randomCalc();