import React from 'react';
import TrelloList from './TrelloList'
import { connect } from 'react-redux';
import TrelloActionButton from "./TrelloActionButton"
import { DragDropContext } from "react-beautiful-dnd";
import { sort } from "../actions";

class App extends React.Component {
  onDragEnd = (result) => {
    // reordering logic 
    const {destination, source, draggableId} = result;
    if (!destination) {
      return; 
    }
    this.props.dispatch(
        sort(
          source.droppableId,
          destination.droppableId, 
          source.index,
          destination.index,
          draggableId
        )
      )

  }
  render(){
    const { lists } = this.props;
    
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div className="App">
         <h2>Test</h2>
        <div style={styles.listsContainer}>
        {lists.map(list => 
        (<TrelloList listID={list.id} key={list.id} title={list.title} cards={list.cards} />
        ))}
        <TrelloActionButton list/>
        </div>
      </div>
      </DragDropContext>
    );
  }
  
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight: 8
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});
export default connect(mapStateToProps)(App);
