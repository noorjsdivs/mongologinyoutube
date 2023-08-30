import clsx from "clsx";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  className: string;
}

const Container = ({ children, className, ...props }: Props) => {
  return (
    <div className={clsx("max-w-screen-xl mx-auto", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
