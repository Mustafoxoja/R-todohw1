import { BackBtn } from "./assets/constract/button";
import { MainContainer } from "./styless/geralStyle";
import { PropsBtn } from "./styless/navbarStyle";

const Product = () => {
  return (
    <MainContainer>
      <PropsBtn>Normal</PropsBtn>
      <PropsBtn $primary>Primary</PropsBtn>
      <PropsBtn $secondary>Secondary</PropsBtn>
    </MainContainer>
  );
};

export default Product;
