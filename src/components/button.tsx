import { cn } from '../lib/utils';

type ButtonProps = {
  type?: 'button' | 'submit';
  children: React.ReactNode;
  className?: string;
};

export function Button({ type, children, className }: ButtonProps) {
  return (
    <>
      <button
        type={type}
        className={cn(
          'px-2 py-1.5 bg-[#238636] text-sm text-white font-normal rounded-md border border-[#f0f6fc1a] transition-colors hover:bg-[#2ea043]',
          className,
        )}
      >
        {children}
      </button>
    </>
  );
}
