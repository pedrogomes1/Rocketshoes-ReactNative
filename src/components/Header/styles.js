import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: #141418;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoHome = styled(RectButton)``;

export const Info = styled(RectButton)``;
export const QuantityItem = styled.Text`
  color: #fff;
  top: -12px;
  right: -8px;
  background: #7159c1;
  min-width: 18px;
  min-height: 18px;
  padding: 2px;
  overflow: hidden;
  position: absolute;
  text-align: center;
  border-radius: 9px;
`;
