/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bindActionCreators } from 'redux';
import api from '../../services/api';
import Load from '../../components/Loading';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';
import {
  Container,
  List,
  Description,
  Price,
  ButtonAdd,
  AddToCartText,
  Item,
  ItemCount,
  TextQuantity,
  ProductImage,
} from './styles';

class Home extends Component {
  state = {
    product: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ product: data, loading: false });
  }

  handleAddProduct = id => {
    const { addToCartRequest } = this.props;
    addToCartRequest(id);
  };

  render() {
    const { product, loading } = this.state;
    const { amount } = this.props;
    return (
      <Container>
        {loading ? (
          <Load />
        ) : (
          <List
            data={product}
            keyExtractor={itemProduct => String(itemProduct.id)}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <ScrollView>
                  <Item>
                    <ProductImage source={{ uri: item.image }} />
                    <Description>{item.title}</Description>
                    <Price>{item.priceFormatted}</Price>
                    <ButtonAdd onPress={() => this.handleAddProduct(item.id)}>
                      <ItemCount>
                        <Icon name="shopping-basket" size={20} color="#fff" />
                        <TextQuantity>{amount[item.id] || 0}</TextQuantity>
                      </ItemCount>
                      <AddToCartText>Adicionar</AddToCartText>
                    </ButtonAdd>
                  </Item>
                </ScrollView>
              </>
            )}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
