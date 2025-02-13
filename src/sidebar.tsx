export interface SidebarProps {
  title: string;
  visible: boolean;
}

export const Sidebar = ({ title }: SidebarProps) => {

  return (
    <div className='flex w-48 border rounded-sm items-center justify-center uppercase'>{title}</div>
  )
};

export default Sidebar;
