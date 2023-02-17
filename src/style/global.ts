import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { typography } from './typography'

export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900');

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

html, body{
    width: 100vw;
    height: 100vh;
}

    /* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
    }

body {
    line-height: 1;
    font-family: "Inter", sans-serif;
    background-color: ${colors.grey4};
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}
    
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: "";
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

input{
    outline: none;
}

p{
    color: ${colors.grey1};
    font-size: ${typography.headline.size};
    font-weight: ${typography.headline.weight};
    line-height: ${typography.headline.height};
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

h1{
    font-size: ${typography.title1.size};
    font-weight: ${typography.title1.weight};
    line-height: ${typography.title1.height};
}

h2
{
    color: ${colors.grey0};
    font-size: ${typography.title2.size};
    font-weight: ${typography.title2.weight};
    line-height: ${typography.title2.height};
}

h3
{
    color: ${colors.grey0};
    font-size: ${typography.title3.size};
    font-weight: ${typography.title3.weight};
    line-height: ${typography.title3.height};
}

select{
    outline: none;
    border: none;
}`
