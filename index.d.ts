/**
 * TypeScript type definitions for React components exposed in the library for other applications to use.
 * @author Andrew Jarombek
 * @since 6/29/2020
 */

import {ReactPropTypes, FunctionComponent, ReactNode, RefObject} from "react";

// AJBaseButton component (internal)

interface AJBaseButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
    enabledClasses?: ReactPropTypes["array"];
    disabledClasses?: ReactPropTypes["array"];
    className?: string;
}

declare const AJBaseButton: FunctionComponent<AJBaseButtonProps>;

// AJButton component

type AJButtonType = 'contained' | 'outlined' | 'text'
export interface AJButtonProps {
    type: AJButtonType,
    children: ReactNode | string;
    onClick?: Function;
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJButton: FunctionComponent<AJButtonProps>;

// AJCodeSnippet component

type AJCodeSnippetLanguage = 'java' | 'javascript'
export interface AJCodeSnippetProps {
    children: ReactPropTypes["node"];
    language?: AJCodeSnippetLanguage;
    className?: string;
}

export const AJCodeSnippet: FunctionComponent<AJCodeSnippetProps>;

// AJContainedButton component

export interface AJContainedButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJContainedButton: FunctionComponent<AJContainedButtonProps>;

// AJMobileHamburger component

export interface AJMobileHamburgerProps {
    onClick?: Function;
    ref?: RefObject<HTMLInputElement>;
    className?: string;
}

export const AJMobileHamburger: FunctionComponent<AJMobileHamburgerProps>;

// AJModal component

export interface AJModalProps {
    children: ReactPropTypes["node"];
    onClickBackground?: ReactPropTypes["func"];
    backdrop?: ReactPropTypes["bool"];
    className?: string;
}

export const AJModal: FunctionComponent<AJModalProps>;

// AJNavCircle component

type AJNavCircleDirection = 'up' | 'down' | 'left' | 'right';
export interface AJNavCircleProps {
    direction: AJNavCircleDirection;
    height?: ReactPropTypes["string"];
    active?: ReactPropTypes["bool"];
    onClick: ReactPropTypes["func"];
    className?: string;
}

export const AJNavCircle: FunctionComponent<AJNavCircleProps>;

// AJNavList component

interface AJNavListItems {
    content: ReactNode | string;
    onClick: Function;
}

export interface AJNavListProps {
    items: AJNavListItems[];
    className?: string;
}

export const AJNavList: FunctionComponent<AJNavListProps>;

// AJNavTextCircle component

type AJNavTextCircleDirection = 'left' | 'right';
export interface AJNavTextCircleProps {
    text:  ReactPropTypes["string"];
    textSide: AJNavTextCircleDirection;
    direction: AJNavCircleDirection;
    height?:  ReactPropTypes["string"];
    active?: ReactPropTypes["bool"];
    onClick: ReactPropTypes["func"];
    className?: string;
}

export const AJNavTextCircle: FunctionComponent<AJNavTextCircleProps>;

// AJOutlinedButton component

export interface AJOutlinedButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJOutlinedButton: FunctionComponent<AJOutlinedButtonProps>;

// AJResponsiveGrid component

export interface AJResponsiveGridProps {
    items: object[];
    smallBreakpoint?: ReactPropTypes["string"];
    mediumBreakpoint?: ReactPropTypes["string"];
    largeBreakpoint?: ReactPropTypes["string"];
    className?: string;
}

export const AJResponsiveGrid: FunctionComponent<AJResponsiveGridProps>;

// AJSwitch component

export interface AJSwitchProps {
    onChange: ReactPropTypes["func"];
    initialState?: ReactPropTypes["bool"];
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJSwitch: FunctionComponent<AJSwitchProps>;

// AJSwitchIcon component

export interface AJSwitchIconProps {
    offImageUrl: ReactPropTypes["string"];
    onImageUrl: ReactPropTypes["string"];
    onChange: ReactPropTypes["func"];
    initialState?: ReactPropTypes["bool"];
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJSwitchIcon: FunctionComponent<AJSwitchIconProps>;

// AJTag component

export interface AJTagProps {
    content: ReactPropTypes["node"];
    color?: ReactPropTypes["string"];
    className?: string;
}

export const AJTag: FunctionComponent<AJTagProps>;

// AJTagImage component

export interface AJTagImageProps {
    content: ReactPropTypes["node"];
    picture?: ReactPropTypes["any"];
    color?: ReactPropTypes["string"];
    className?: string;
}

export const AJTagImage: FunctionComponent<AJTagImageProps>;

// AJTextButton component

export interface AJTextButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJTextButton: FunctionComponent<AJTextButtonProps>;

// AJTextCard component

export interface AJTextCardProps {
    title: ReactPropTypes["node"];
    subtitle?: ReactPropTypes["node"];
    content: ReactPropTypes["node"];
    action: ReactPropTypes["func"];
    actionText: ReactPropTypes["node"];
    actionDisabled?: ReactPropTypes["bool"];
    className?: string;
}

export const AJTextCard: FunctionComponent<AJTextCardProps>;
