import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
  background: #141419;
`;

export const List = styled.FlatList``;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;
export const Item = styled.View`
  padding: 20px;
  margin-right: 10px;
  background: #fff;
  max-width: 250px;
  max-height: 360px;
  border-radius: 4px;
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 16px;
  line-height: 21px;
  font-weight: bold;
  color: #333;
`;
export const Price = styled.Text`
  font-size: 21px;
  line-height: 25px;
  margin-top: 5px;
  font-weight: bold;
`;
export const ButtonAdd = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch;
  background: #7159c1;
  border-radius: 4px;
  height: 40px;
  flex-direction: row;
  align-items: center;
`;
export const AddToCartText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #fff;
  flex: 1;
`;

export const ItemCount = styled.View`
  background: ${darken(0.05, '#7159c1')};
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: center;
  width: 60px;
`;

export const TextQuantity = styled.Text`
  color: #fff;
  margin-left: 8px;
`;
