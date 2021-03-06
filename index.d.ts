/**
 * TypeScript type definitions for React components exposed in the library for other applications to use.
 * @author Andrew Jarombek
 * @since 6/29/2020
 */

// @ts-ignore
import React, {FunctionComponent, ReactNode, RefObject} from "react";
import { ClassValue } from 'classnames/types';

// AJBaseButton component (internal)

interface AJBaseButtonProps {
    children: ReactNode;
    onClick?: Function;
    disabled?: boolean;
    enabledClasses?: string[];
    disabledClasses?: string[];
    className?: string;
}

declare const AJBaseButton: FunctionComponent<AJBaseButtonProps>;

// AJButton component

type AJButtonType = 'contained' | 'outlined' | 'text'
export interface AJButtonProps {
    type: AJButtonType,
    children: ReactNode | string;
    onClick?: Function;
    disabled?: boolean;
    className?: string;
}

export const AJButton: FunctionComponent<AJButtonProps>;

// AJButtonGroup component

export interface AJButtonGroupProps {
    className?: string;
    children: ReactNode | string;
}

export const AJButtonGroup: FunctionComponent<AJButtonGroupProps>;

// AJCodeSnippet component

type AJCodeSnippetLanguage = 'java' | 'javascript'
export interface AJCodeSnippetProps {
    children: ReactNode;
    language?: AJCodeSnippetLanguage;
    className?: string;
}

export const AJCodeSnippet: FunctionComponent<AJCodeSnippetProps>;

// AJContainedButton component

export interface AJContainedButtonProps {
    children: ReactNode;
    onClick?: Function;
    disabled?: boolean;
    className?: string;
}

export const AJContainedButton: FunctionComponent<AJContainedButtonProps>;

// AJLoadingDots component

export interface AJLoadingDotsProps {
    className?: string;
}

export const AJLoadingDots: FunctionComponent<AJLoadingDotsProps>;

// AJMobileHamburger component

export interface AJMobileHamburgerProps {
    onClick?: Function;
    ref?: RefObject<HTMLInputElement>;
    className?: string;
}

export const AJMobileHamburger: FunctionComponent<AJMobileHamburgerProps>;

// AJModal component

export interface AJModalProps {
    children: ReactNode;
    onClickBackground?: Function;
    backdrop?: boolean;
    className?: string;
}

export const AJModal: FunctionComponent<AJModalProps>;

// AJNavCircle component

type AJNavCircleDirection = 'up' | 'down' | 'left' | 'right';
export interface AJNavCircleProps {
    direction: AJNavCircleDirection;
    height?: string;
    active?: boolean;
    onClick: Function;
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
    text: string;
    textSide: AJNavTextCircleDirection;
    direction: AJNavCircleDirection;
    height?: string;
    active?: boolean;
    onClick: Function;
    className?: string;
}

export const AJNavTextCircle: FunctionComponent<AJNavTextCircleProps>;

// AJNotificationCircle component

export interface AJNotificationCircleProps {
    count?: number;
}

export const AJNotificationCircle: FunctionComponent<AJNotificationCircleProps>;

// AJOutlinedButton component

export interface AJOutlinedButtonProps {
    children: ReactNode;
    onClick?: Function;
    disabled?: boolean;
    className?: string;
}

export const AJOutlinedButton: FunctionComponent<AJOutlinedButtonProps>;

// AJRadioButton component

export interface AJRadioButtonProps {
    id: string;
    name: string;
    value: string;
    label: ReactNode;
    defaultChecked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: ClassValue;
}

export const AJRadioButton: FunctionComponent<AJRadioButtonProps>;

// AJResponsiveGrid component

export interface AJResponsiveGridProps {
    items: object[];
    smallBreakpoint?: string;
    mediumBreakpoint?: string;
    largeBreakpoint?: string;
    className?: string;
}

export const AJResponsiveGrid: FunctionComponent<AJResponsiveGridProps>;

// AJSelect component

export interface AJSelectOptions {
    content: ReactNode;
    value: any;
}

export interface AJSelectProps {
    placeholder?: ReactNode;
    options: AJSelectOptions[];
    defaultOption?: number;
    onClickSelect?: Function;
    onClickListOption?: Function;
    disabled?: boolean;
    className?: string;
}

export const AJSelect: FunctionComponent<AJSelectProps>;

// AJSwitch component

export interface AJSwitchProps {
    onChange: Function;
    initialState?: boolean;
    disabled?: boolean;
    className?: string;
}

export const AJSwitch: FunctionComponent<AJSwitchProps>;

// AJSwitchIcon component

export interface AJSwitchIconProps {
    offImageUrl: string;
    onImageUrl: string;
    onChange: Function;
    initialState?: boolean;
    disabled?: boolean;
    className?: string;
}

export const AJSwitchIcon: FunctionComponent<AJSwitchIconProps>;

// AJTag component

export interface AJTagProps {
    content: ReactNode;
    color?: string;
    className?: string;
}

export const AJTag: FunctionComponent<AJTagProps>;

// AJTagImage component

export interface AJTagImageProps {
    content: ReactNode;
    picture?: any;
    color?: string;
    className?: string;
}

export const AJTagImage: FunctionComponent<AJTagImageProps>;

// AJTextButton component

export interface AJTextButtonProps {
    children: ReactNode;
    onClick?: Function;
    disabled?: boolean;
    className?: string;
}

export const AJTextButton: FunctionComponent<AJTextButtonProps>;

// AJTextCard component

export interface AJTextCardProps {
    title: ReactNode;
    subtitle?: ReactNode;
    content: ReactNode;
    action: Function;
    actionText: ReactNode;
    actionDisabled?: boolean;
    className?: string;
}

export const AJTextCard: FunctionComponent<AJTextCardProps>;
