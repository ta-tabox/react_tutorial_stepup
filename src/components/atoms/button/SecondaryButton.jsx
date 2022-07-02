import styled from "styled-components";
import { BaseBotton } from "./BaseButton"

export const SecondaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled(BaseBotton)`
  background-color: #11999e;
`;
