import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
`;

export const BarNavigation = styled.div`
  width: 300px;
  height: 100vh;
  padding: 20px;
  flex: 0 0 230px;
`;

export const Container = styled.div`
  background-color: #12014f;
  width: 100%;
  min-height: 100vh;
  flex: 1;
  padding: 40px;
`;

export const Client = styled.div`
  border: 1px solid #cccccc;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  ${({ status }) =>
    status === 'next'
      ? `
    background: #E10050;
  `
      : status === 'current'
      ? `display: none`
      : `background-color: #ffffff`}
`;

export const Number = styled.p`
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  align-items: flex-end;
  margin-left: 32px;
  color: #323c47;
  ${({ status }) =>
    status === 'next'
      ? `
    color: #FFFFFF;
  `
      : `color: #323c47;`}
`;

export const Content = styled.div`
  display: flex;
  max-width: 100%;
  padding: 0 20px;
  justify-content: space-between;
`;
export const Painel = styled.div`
  width: ${(props) => props.size || '70%'};
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  h3 {
    font-weight: 600;
    font-size: 11px;
    line-height: 15px;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #323c47;
  }
`;

export const InAttendance = styled.div`
  border: 1px solid #cccccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 32px 0 16px;
  max-width: 180px;
  height: 180px;
  cursor: pointer;
  &:hover {
    border: 1px solid #e10050;
  }
`;
