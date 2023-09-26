import { styled } from 'styled-components';
interface BoxProps {
  $margin?: string;
}

interface ParagraphProps {
  color?: string;
  fontSize?: string;
  fontWeight?: number;
  textDecoration?: string;
  $marginleft?: string;
  marginTop?: string;
  $lineheight?: string;
  width?: string;
}
export const Container = styled('div')`
  border-radius: 16px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  width: 300px;
  height: 376px;
  padding: 24px;
  box-sizing: border-box;
`;

export const CustomBox = styled('div')<BoxProps>`
  margin: ${(props) => props.$margin || '0'};
`;

export const AccountantProfileIcon = styled('img')`
  border-radius: 8px;
  width: 64px;
  height: 64px;
`;

export const MoreInfoButton = styled('button')`
  border-radius: 8px;
  opacity: 1;
  background-color: ${(props) => props.theme.colors.light};
  color: ${(props) => props.theme.colors.dodgerBlue};
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  border: unset;
  letter-spacing: 0;
  text-align: left;
  line-height: 20px;
`;

export const InfoParagraph = styled('p')<ParagraphProps>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${(props) => props.fontSize || '1rem'};
  line-height: ${(props) => props.$lineheight || '1.5rem'};
  color: ${(props) => props.color || props.theme.colors.dark};
  margin: 0;
  font-family: Roboto, sans-serif;
  margin-top: ${(props) => props.marginTop || 0};
  margin-left: ${(props) => props.$marginleft || 0};
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 400};
  text-decoration: ${(props) => props.textDecoration || 'none'};
  letter-spacing: 0;
  width: ${(props) => props.width || props.textDecoration};
`;