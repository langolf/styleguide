import React from 'react';

export type StyleguidePlaceholderProps = {
    /**
     * The text inside the placeholder-component
     */
    placeholder?: string;
    /**
     * The text color for the placeholder-component
     */
    color?: string;
    /**
     * Background-color for the placeholder-component
     */
    backgroundColor?: string;
    /**
     * Width of cell for component's render
     */
    width?: string;
    /**
     * height of cell for component's render
     */
    height?: string;
    /**
     * If set to true - show visual border
     */
    border?: boolean;
    /**
     * The elements to be inserted in the content block
     */
    children?: React.ReactNode;
};

declare const StyleguidePlaceholder: React.FunctionComponent<StyleguidePlaceholderProps>;

export default StyleguidePlaceholder;