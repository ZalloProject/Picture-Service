import posed from 'react-pose';
import styled from 'styled-components';

const Box = styled(posed.div({
  left: {x: 50},
  right: {x: -480}
}))`
  background-color: white;
  position: relative;
  display: 'flex';
  flexFlow: 'column wrap';

  ${props => `
    height: 458px;
    width: 900px;
    left: calc(50% - ${props.size / 2}px);
  `}
`;

export default Box;
