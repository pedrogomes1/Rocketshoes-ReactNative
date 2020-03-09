import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  /* padding: 30px; */
  background: #141419;
`;

export const Imagem = styled.View`
  flex-direction: column;
`;

export const ImageProduct = styled.Image`
  height: 80px;
  width: 80px;
`;
export const Products = styled.View`
  background: #fff;
  padding-bottom: 120px;
`;

export const List = styled.FlatList`
  padding: 10px;
`;
export const Item = styled.View`
  flex-direction: row;
  padding: 10px;
  flex: 1;
`;
export const Trash = styled(RectButton)`
  justify-content: center;
`;

export const ProductDetail = styled.View`
  flex-direction: row;
`;

export const Info = styled.View`
  /* padding: 5px; */
  flex: 1;
`;
export const ProductInfo = styled.View`
  flex-direction: column;
  margin-left: 5px;
  justify-content: center;
`;

export const Description = styled.Text`
  font-size: 14px;
  line-height: 18px;
  max-width: 170px;
`;
export const Price = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  margin-top: 5px;
`;
export const Amount = styled.View`
  flex-direction: row;
  background: #eee;
  border-radius: 4px;
  margin-top: 5px;
  align-items: center;
  padding: 0px 10px;
  flex: 1;
`;
export const Quantity = styled.TextInput.attrs({
  readonly: true,
})`
  text-align: center;
  background: #fff;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0 5px;
`;
export const Total = styled.Text`
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
`;

export const TotalProducts = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
export const TextTotal = styled.Text`
  color: #333;
  font-size: 12px;
`;
export const FinalPrice = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;
export const ButtonTotal = styled.TouchableOpacity`
  background: #7159c1;
  align-self: stretch;
  height: 40px;
  border-radius: 4px;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  /* flex: 1; */
`;
export const TextButtonTotal = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
