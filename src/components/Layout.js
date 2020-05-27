import styled from "styled-components";

const Layout = styled.div`
  display: grid;
  grid-gap: 10px;
  @media (max-width: 768px) {
    grid-template-areas:
      " header header "
      " content content"
      " footer footer";
  }
  @media (min-width: 768px) {
    grid-template-columns: 100px auto auto;

    grid-template-areas:
      "header header sidebar"
      "content content sidebar"
      "footer footer footer";
  }
`;

export default Layout;
