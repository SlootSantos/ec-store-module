import React, { Component } from 'react';

// import connector
// redux action binder, to make actions available in component
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCart } from '../actions/get_cart';

import '../styles/header/header.css';

import CartIcon from '../components/cart_icon';

import Logo from '../assets/vo_coffee_logo_white.svg';
import facebook from '../assets/facebook-logo.svg';
import instagram from '../assets/instagram-logo.svg';


class Header extends Component {
  componentDidMount() {
    this.props.getCart();
  }

  goToSocialMedia(link) {
    window.open(link);
  };

  renderIcons() {
    return (
      <div className="social-icons">
        <img onClick={() => this.goToSocialMedia('https://facebook.com/vocoffeede')} src={facebook} alt=""/>
        <img onClick={() => this.goToSocialMedia('https://www.instagram.com/vo.coffee')} src={instagram} alt=""/>
      </div>
    )
  };

  render() {
    const itemsCount = this.props.cart
    ? this.props.cart.quantity
    : '0';

    return (
      <div className="header">
        <div className="header__nav left">
          {/* Contact | <span className="phone_number">+49 160 94446382</span> */}

          { this.renderIcons() }

        </div>
        <div className="header__nav logo">
          <Link to="/"><img src={Logo} alt="" /></Link>
        </div>


        <div className="header__nav right">
          <Link to="/shop/cart">
            <CartIcon count={itemsCount} />
          </Link>
        </div>
      </div>
    );
  }
}


// map dispatch to props
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCart }, dispatch);
}


// map state to props
function mapStateToProps({ cart }) {
  return {
    cart
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
