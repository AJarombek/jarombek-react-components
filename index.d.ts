/**
 * TypeScript type definitions for React components exposed in the library for other applications to use.
 * @author Andrew Jarombek
 * @since 6/29/2020
 */

import {ReactPropTypes, FunctionComponent} from "react";

// AJBaseButton component (internal)

interface AJBaseButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
    enabledClasses?: ReactPropTypes["array"];
    disabledClasses?: ReactPropTypes["array"];
}

declare const AJBaseButton: FunctionComponent<AJBaseButtonProps>;

// AJButton component

type AJButtonType = 'contained' | 'outlined' | 'text'
export interface AJButtonProps {
    type: AJButtonType,
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
}

export const AJButton: FunctionComponent<AJButtonProps>;

// AJCodeSnippet component

type AJCodeSnippetLanguage = 'java' | 'javascript'
export interface AJCodeSnippetProps {
    children: ReactPropTypes["node"];
    language?: AJCodeSnippetLanguage;
}

export const AJCodeSnippet: FunctionComponent<AJCodeSnippetProps>;

// AJContainedButton component

export interface AJContainedButtonProps {
    children: ReactPropTypes["node"];
    onClick?: ReactPropTypes["func"];
    disabled?: ReactPropTypes["bool"];
}

export const AJContainedButton: FunctionComponent<AJContainedButtonProps>;

// AJMobileHamburger component

export interface AJMobileHamburgerProps {
    onClick?: ReactPropTypes["func"];
}

export const AJMobileHamburger: FunctionComponent<AJMobileHamburgerProps>;

// AJModal component

export interface AJModalProps {
    children: ReactPropTypes["node"];
    onClickBackground?: ReactPropTypes["func"];
    backdrop?: ReactPropTypes["bool"];
}

export const AJModal: FunctionComponent<AJModalProps>;
