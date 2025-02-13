export interface ContentProps {
  title: string;
  visible: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Content = ({ title }: ContentProps) => {
  return (
    <div className='flex grow rounded-sm --bg-grey'>
    </div>
  )
};

export default Content;
