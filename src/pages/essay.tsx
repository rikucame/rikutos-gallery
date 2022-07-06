import * as React from "react";
import styled from "styled-components";
import { BaseLayout } from "../components/Layout/BaseLayout";

const Main = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h1`
  font-weight: 700;
`;

// markup
const Essay: React.VFC = () => {
  return (
    <React.Fragment>
      <BaseLayout>
        <Main>
          <Message>Comming Soon</Message>
        </Main>
      </BaseLayout>
    </React.Fragment>
  );
};

export default Essay;