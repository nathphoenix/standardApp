import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import uuid from 'uuid';
import {connect} from 'react-redux';    //this help to get state from redux and import to react i.e 
                                        //from item reducer to react shoppinglist component

import {getItems, deleteItem, addItems } from '../actions/itemActions';
import propTypes from 'prop-types';


class ShoppingList extends Component{
componentDidMount(){
    this.props.getItems();
}

//method for ondeleteclick

   onDeleteClick = id =>{
       this.props.deleteItem(id);
   }

    // state = {
    //        items : [
    //            {id: uuid(), name: 'Eggs' },
    //            {id: uuid(), name: 'Plantain' },
    //            {id: uuid(), name: 'rice' },
    //            {id : uuid(), name: 'Beans' }
    //        ]
    // }

    render() {
        const {items} = this.props.item;
        return(
            <Container>
                {/* <Button color="dark"
                style={{marginBottom : '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item');
                    if (name) {
                        this.setState(state => ({
                            items: [...state.items, {id : uuid(), name}]
                        }));
                    }
                }}
                >
                    Add Item
                </Button> */}

                    <ListGroup>
                        <TransitionGroup>
                            {items.map(({id, name}) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                   
                                   onClick = {this.onDeleteClick.bind(this, id)}
                                   
                                    // onClick={() => {
                                    //     this.setState(state => ({
                                    //         items : state.items.filter(item => item.id !== id )
                                    //     }));
                                    // }}
                                    
                                    >
                                    &times;
                                    </Button>
                                    {name}
                                </ListGroupItem>
                                </CSSTransition>
                            )
                            )}
                        </TransitionGroup>
                    </ListGroup>
            </Container>
        );
    }
}

ShoppingList.propTypes = {               //when you bring in an action from redux , it will be stored as a props
    getItems:propTypes.func.isRequired,
    item:propTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, {getItems, deleteItem}) (ShoppingList);