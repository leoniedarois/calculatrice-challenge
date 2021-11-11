import {createGlobalStyle} from "styled-components"

export const ButtonStyle = createGlobalStyle`
  .result {
      padding: 0 15px;
      height: 198px;
      border-radius: 20px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      position: relative;
  }
  .result input {
    font-size: 2.5rem;
    max-width: 100%;
    text-align: right;
    font-family: 'Poppins-medium', sans-serif;
    height: 75px;
    border: none;
    background: transparent;
    pointer-events: none;
    color: ${props => props.theme.fontColor};
    transition: 350ms ease-in-out;
  }
  .wrapperBtn {
      padding: 0 14px;
      border-radius: 20px;
      height: auto;
  }
  .btn {
      background: ${props => props.theme.calcBackground};
      margin: 4px 10px;
      padding: 0;
      width: 70px;
      height: 70px;
      cursor: pointer;
      border-radius: 50%;
      border: none;
      color:  ${props => props.theme.fontColor};
      font-size: 1rem;
      font-family: 'Poppins-medium', sans-serif;
      transition: 350ms ease-in-out;
  }
  .operator {
    background: ${props => props.theme.btnColor};
    transition: 350ms ease-in-out;
  }

  .resultBtn {
      width: 160px;
      border-radius: 8px;
      background: #fccf63;
  }
  .switch-container {
    position: absolute;
	top: 0; 
    right: 20px;
  }
  input[type="checkbox"].switch  {
	position: absolute;
	opacity: 0;
  }
  input[type="checkbox"].switch + div {
	width: 40px;
	height: 20px;
	border-radius: 999px;
	background-color: #323232;
	transition-duration: .4s;
	transition-property: background-color, box-shadow;
	cursor: pointer;
  }
  input[type="checkbox"].switch + div span {
	position: absolute;
    font-size: 1.6rem;
    color: white;
    margin-top: 12px;
  }
  input[type="checkbox"].switch + div span:nth-child( 1 ) {
    margin-left: 15px;
  }
  input[type="checkbox"].switch + div span:nth-child( 2 ) {
    margin-left: 55px;
  }
  input[type="checkbox"].switch:checked + div {
	width: 44px;
	background-position: 0 0;
	background-color: #3b89ec;
  }
  input[type="checkbox"].switch + div {
	width: 44px;
	height: 22px;
  }
  input[type="checkbox"].switch:checked + div {
	background-color: #fccf63;
  }
  input[type="checkbox"].switch + div > div {
	float: left;
	width: 20px; 
    height: 20px;
	border-radius: inherit;
	background: #ffffff;
	transition-timing-function: cubic-bezier(1,0,0,1);
	transition-duration: 0.4s;
	transition-property: transform, background-color;
	pointer-events: none;
	margin-top: 1px;
	margin-left: 1px;
  }
  input[type="checkbox"].switch:checked + div > div {
	transform: translate3d(20px, 0, 0);
	background-color: #ffffff;
  }
  input[type="checkbox"].bigswitch.switch + div > div {
	width: 44px;
	height: 44px;
	margin-top: 1px;
  }
  input[type="checkbox"].switch:checked + div > div {
	transform: translate3d(22px, 0, 0);
  }
`;