export interface ContentProps {
  title: string;
  visible: boolean;
}

export const Content = ({ title }: ContentProps) => {

  return (
    <div className='flex grow border rounded-sm items-center justify-center uppercase'>{title}</div>
  )
};

export default Content;
