import styled from "styled-components";
import { BaseBotton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #11999e;
`;
