import { Toolbox } from "./toolbox";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full items-center">
      <Toolbox />
      <div className="flex h-screen w-full items-center text-center">
        {children}
      </div>
    </div>
  );
};
