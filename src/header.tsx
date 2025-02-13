export interface HeaderProps {
  heading: string;
  visible: boolean;
}

export const Header = ({ heading }: HeaderProps) => {
  return (
    <div className="flex h-12 rounded-sm items-center justify-between --bg-primary px-4">
      <div className="uppercase text-white font-semibold tracking-widest">{heading}</div>
      <div className="h-8 w-8 rounded-full --bg-tertiary" />
    </div>
  )
};

export default Header;
