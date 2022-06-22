import React, { useState } from "react";
import { Animated } from "react-native";
import { Card, Input } from "../../components";
import Icon from "react-native-vector-icons/Feather";
import { getBrand } from "../../components/Input/brand";

import {
  Container,
  ScrollView,
  Header,
  Title,
  Subtitle,
  Content,
  View,
  Button,
  TextButton,
} from "./styles";

const Home = () => {
  const [widthAnimated, setWidthAnimated] = useState(new Animated.Value(310));
  const [backView, setBackView] = useState(false);

  const [icon, setIcon] = useState({
    icon: false,
  });

  const [data, setData] = useState({
    name: "",
    number: "",
    validate: "",
    cvv: "",
  });

  const animatedCard = (back: boolean) => {
    if (back && !backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(true);
      }, 400);
    }

    if (!back && backView) {
      Animated.timing(widthAnimated, {
        toValue: 0,
        duration: 400,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        Animated.timing(widthAnimated, {
          toValue: 310,
          duration: 400,
          useNativeDriver: false,
        }).start();
        setBackView(false);
      }, 400);
    }
  };

  return (
    <ScrollView>
      <Container>
        <Header>
          <Title>Meu cartão</Title>
          <Subtitle>Insira os dados do cartão</Subtitle>
        </Header>
        <Content>
          <Animated.View style={{ width: widthAnimated }}>
            <Card data={data} icon={icon?.icon} back={backView} />
          </Animated.View>

          <Input
            placeholder="Nome do titular"
            value={data.name}
            onChangeText={(text) => {
              setData({ ...data, name: text });
              animatedCard(false);
            }}
            icon={<Icon name="user" size={18} color="#274472" />}
          />
          <Input
            placeholder="Número do cartão"
            value={data.number}
            type="credit-card"
            mask
            onChangeText={(text) => {
              setData({ ...data, number: text });
              setIcon(getBrand(text));
              animatedCard(false);
            }}
            icon={<Icon name="shield" size={18} color="#274472" />}
            width={undefined}
          />
          <View>
            <Input
              width="45%"
              value={data.validate}
              type="custom"
              options={{
                mask: "99/99",
              }}
              mask
              onChangeText={(text) => {
                setData({ ...data, validate: text });
                animatedCard(false);
              }}
              placeholder="Validade"
              icon={<Icon name="calendar" size={18} color="#274472" />}
            />
            <Input
              width="45%"
              value={data.cvv}
              type="custom"
              options={{
                mask: "9999",
              }}
              mask
              onChangeText={(text) => {
                setData({ ...data, cvv: text });
                animatedCard(true);
              }}
              placeholder="CVV"
              icon={<Icon name="lock" size={18} color="#274472" />}
            />
          </View>
        </Content>
        <Button>
          <TextButton>Cadastrar</TextButton>
        </Button>
      </Container>
    </ScrollView>
  );
};

export default Home;
