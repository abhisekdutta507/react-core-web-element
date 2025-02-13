export interface HeaderProps {
  heading: string;
  visible: boolean;
}

export const Header = ({ heading }: HeaderProps) => {

  return (
    <div className="flex h-12 border rounded-sm items-center justify-center uppercase">{heading}</div>
  )
};

export default Header;
