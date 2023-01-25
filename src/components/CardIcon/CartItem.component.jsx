import React from 'react';
import './CardItem.styles.css';
import { ReactComponent as Icon} from '../../assets/shopping-bag.svg';
import {selectCartItemCount} from '../../redux/cart/cart.selector';

import {connect} from 'react-redux';
import {togglecartHidden} from '../../redux/cart/cart.reducer'

import {createStructuredSelector} from 'reselect';

const CardIcon = ({togglecartHidden,itemcount}) =>(
    <div className='cart-icon' onClick={togglecartHidden}>
    <Icon className ='shopping-icon'/>
    <span className='item-count'>{itemcount}</span>
    </div>
);

const mapDispatchToProps = dispatch =>({
togglecartHidden: () =>dispatch(togglecartHidden())
});

const mapStateToProps = createStructuredSelector({
itemcount:selectCartItemCount
});

export default connect(mapStateToProps,mapDispatchToProps)(CardIcon);

