import * as react_jsx_runtime from 'react/jsx-runtime';

interface HeaderProps {
    heading: string;
    visible: boolean;
}

interface NavProps {
    title: string;
    visible: boolean;
}

interface ContentProps {
    title: string;
    visible: boolean;
}

interface SidebarProps {
    title: string;
    visible: boolean;
}

interface CoreWebElementProps {
    header: HeaderProps;
    nav: NavProps;
    content: ContentProps;
    sidebar: SidebarProps;
}
declare const CoreWebElement: ({ header, nav, content, sidebar }: CoreWebElementProps) => react_jsx_runtime.JSX.Element;

export { CoreWebElement, type CoreWebElementProps, CoreWebElement as default };
