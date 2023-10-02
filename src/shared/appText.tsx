import React from 'react';
import styled from 'styled-components/native';

export enum FontWeight {
  Regular = 400,
  Medium = 500,
  SemiBold = 600,
  Bold = 700,
  ExtraBold = 800,
}

interface TextProps {
  size?: TextSize
  color?: string
  weight: number
  lineHeight?: number
  textAlign?: string
  numberOfLines?: number
  marginHorizontal?: number
  marginVertical?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  opacity?: number
  fontFamily?: FontFamily
};

export enum TextSize {
  Footer = '10px',
  CaptionSmall = '11px',
  CaptionLarge = '12px',
  BodySmall = '14px',
  BodyLarge = '16px',
  Heading7 = '18px',
  Heading6 = '12px',
  Heading5 = '14px',
  Heading4 = '16px',
  Heading3 = '20px',
  Heading2 = '24px',
  Heading1 = '34px',
}

export enum FontFamily {
  Proxima = 'Proxima',
}

export const AppText = styled.Text<TextProps>`
  color: ${(props: TextProps) => (props.color ? props.color : 'black')};
  font-size: ${(props: TextProps) =>
    props.size ? props.size : TextSize.BodyLarge};
  font-weight: ${(props: TextProps) => (props.weight ? props.weight : 500)};
  text-align: ${(props: TextProps) =>
    props.textAlign ? props.textAlign : 'auto'};
  line-height: ${(props: TextProps) =>
    props.lineHeight ? props.lineHeight + 'px' : '20px'};
  font-family: ${(props: TextProps) =>
    props.fontFamily ? props.fontFamily : FontFamily.Proxima};
  opacity: ${(props: TextProps) => (props.opacity ? props.opacity : 1)};
  margin-horizontal: ${(props: TextProps) =>
    props.marginHorizontal ? props.marginHorizontal + 'px' : 'null'};
  margin-left: ${(props: TextProps) =>
    props.marginLeft ? props.marginLeft + 'px' : 'null'};
  margin-right: ${(props: TextProps) =>
    props.marginRight ? props.marginRight + 'px' : 'null'};
  margin-vertical: ${(props: TextProps) =>
    props.marginVertical ? props.marginVertical + 'px' : 'null'};
  margin-top: ${(props: TextProps) =>
    props.marginTop ? props.marginTop + 'px' : 'null'};
  margin-bottom: ${(props: TextProps) =>
    props.marginBottom ? props.marginBottom + 'px' : 'null'};
`;
