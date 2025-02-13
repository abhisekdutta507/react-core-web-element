import { Header, HeaderProps } from './header';
import { Nav, NavProps } from './nav';
import { Content, ContentProps } from './content';
import { Sidebar, SidebarProps } from './sidebar';
import './styles.css';

export interface CoreWebElementProps {
  header: HeaderProps;
  nav: NavProps;
  content: ContentProps;
  sidebar: SidebarProps;
}

export const CoreWebElement = ({ header, nav, content, sidebar }: CoreWebElementProps) => {
  return (
    <div className="flex flex-col h-screen w-screen p-4 gap-4">
      {
        header.visible && (
          <Header {...header} />
        )
      }

      <div className='flex grow gap-4'>
        {
          nav.visible && (
            <Nav {...nav} />
          )
        }
        {
          content.visible && (
            <Content {...content} />
          )
        }
        {
          sidebar.visible && (
            <Sidebar {...sidebar} />
          )
        }
      </div>
    </div>
  );
};

export default CoreWebElement;
