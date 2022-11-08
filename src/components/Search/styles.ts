import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .result {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.font.secondary};

    h3 {
        margin-left: 10px;
        color: ${(props) => props.theme.font.primary};
    }
  }

  .search {
    display: flex;
    align-items: center;

    input {
        margin-left: 15px;
    }
  }

  .divider {
    height: 2px;
    background: gray;
  }
`;
