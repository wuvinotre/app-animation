import React, { ReactElement } from "react";
import Icon from "react-native-vector-icons/Fontisto";

interface propsBrand {
  [key: string]: any;
}

const cardBrand: propsBrand = {
  "55": { icon: <Icon name="mastercard" size={18} color="#fff" /> },
  "41": { icon: <Icon name="visa" size={18} color="#fff" /> },
  "37": { icon: <Icon name="american-express" size={18} color="#fff" /> },
};

export const getBrand = (number: string) => {
  if (number && number.length >= 2) {
    const prefix = number.substring(0, 2);
    return cardBrand.hasOwnProperty(prefix) ? cardBrand[prefix] : false;
  }
  return cardBrand["undefined"];
};
