import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import {
  Container,
  List,
  Description,
  Price,
  Amount,
  Quantity,
  Total,
  Products,
  Item,
  ProductInfo,
  Info,
  ProductDetail,
  ImageProduct,
  Trash,
  TotalProducts,
  FinalPrice,
  TextTotal,
  TextButtonTotal,
  ButtonTotal,
} from './styles';

// eslint-disable-next-line react/prop-types
function Cart({ cart, removeToCart, updateAmountRequest, total }) {
  function increment(product) {
    updateAmountRequest(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmountRequest(product.id, product.amount - 1);
  }
  return (
    <Container>
      <Products>
        <List
          data={cart}
          keyExtractor={product => String(product.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <>
              <Item>
                <Info>
                  <ProductDetail>
                    <ImageProduct source={{ uri: item.image }} />
                    <ProductInfo>
                      <Description>{item.title}</Description>
                      <Price>{item.priceFormatted}</Price>
                    </ProductInfo>
                    <Trash onPress={() => removeToCart(item.id)}>
                      <Icon name="delete-forever" size={30} color="#7159c1" />
                    </Trash>
                  </ProductDetail>

                  <Amount>
                    <Icon
                      name="add-circle-outline"
                      size={20}
                      color="#7159c1"
                      onPress={() => increment(item)}
                    />
                    <Quantity>{item.amount}</Quantity>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                      onPress={() => decrement(item)}
                    />
                    <Total>{item.subtotal}</Total>
                  </Amount>
                </Info>
              </Item>
            </>
          )}
        />
        <TotalProducts>
          <TextTotal>TOTAL</TextTotal>
          <FinalPrice>{total}</FinalPrice>
          <ButtonTotal>
            <TextButtonTotal>Finalizar Pedido</TextButtonTotal>
          </ButtonTotal>
        </TotalProducts>
      </Products>
    </Container>
  );
}
const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
