import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  --bg-color: #fafafa;
  --border: #DBDBDB;
  --white: #fff;
  --gray: #8E8E8E;
  --blue: #0095f7;
  --facebook: #385185;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Helvetica;
}

body {
  background: var(--bg-color);
  overflow-x: hidden;
}

`;
