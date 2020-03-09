/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '../../assets/Logo.png';
import { Container, QuantityItem, Info, LogoHome } from './styles';

function Header({ navigation, cartSize }) {
  return (
    <Container>
      <LogoHome onPress={() => navigation.navigate('Home')}>
        <Image source={logo} />
      </LogoHome>
      <Info onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={25} color="#FFF" />
        <QuantityItem>{cartSize}</QuantityItem>
      </Info>
    </Container>
  );
}

// Recebo as propriedades de outro componente
// state.cart .. esse cart é o nome do meu reducer .. vejo lá em rootReducer
export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
