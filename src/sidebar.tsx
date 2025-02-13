export interface SidebarProps {
  title: string;
  visible: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Sidebar = (props: SidebarProps) => {
  return (
    <div className='hidden md:flex flex-col gap-4 w-48'>
      <div className="rounded-sm w-48 h-48 --bg-warning" />
      <div className="rounded-sm w-48 h-48 --bg-error" />
      <div className="rounded-sm w-48 h-48 --bg-success" />
    </div>
  );
};

export default Sidebar;
