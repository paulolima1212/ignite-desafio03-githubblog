import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
 box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */

html{
	font-size: 62.5%;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1.6;
 -webkit-font-smoothing: antialiased;
 background: ${({ theme }) => theme.colors['base-background']};
 font-family: 'Nunito', sans-serif;
 color: ${({ theme }) => theme.colors.white};
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

a{
 text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
	-webkit-appearance: none;
	margin: 0;
}

input[type='number']{
	-moz-appearance: textfield;
}

.container{
	max-width: 86.4rem;
}

`;
