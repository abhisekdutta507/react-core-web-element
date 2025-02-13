export interface NavProps {
  title: string;
  visible: boolean;
}

export const Nav = ({ title }: NavProps) => {

  return (
    <div className='flex w-12 border rounded-sm items-center justify-center uppercase'>{title}</div>
  )
};

export default Nav;
