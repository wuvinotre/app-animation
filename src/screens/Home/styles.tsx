import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const { height } = Dimensions.get("window");

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 100%;
  height: ${height}px;
  padding: 16px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #5885af10;
`;
export const Header = styled.View`
  margin-top: ${getStatusBarHeight(true)}px;
  width: 100%;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #5885af;
`;
export const Subtitle = styled.Text`
  font-weight: 300;
  color: #5885af;
`;
export const Content = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  align-items: center;
`;

export const View = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 55px;
  margin-bottom: 20px;
  background-color: #274472;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;
export const TextButton = styled.Text`
  color: #fff;
`;
