export interface NavProps {
  title: string;
  visible: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Nav = (props: NavProps) => {
  return (
    <div className='hidden sm:flex flex-col gap-4 w-12'>
      <div className="rounded-sm w-12 h-12 --bg-secondary" />
      <div className="rounded-sm w-12 h-12 --bg-tertiary" />
      <div className="rounded-sm w-12 h-12 --bg-secondary" />
      <div className="rounded-sm w-12 h-12 --bg-tertiary" />
      <div className="rounded-sm w-12 h-12 --bg-secondary" />
    </div>
  )
};

export default Nav;
