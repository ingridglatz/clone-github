import { useMemo } from 'react';
import { cn } from '../lib/utils';
import { useFormContext } from 'react-hook-form';

type InputProps = {
  label?: string;
  type?: 'text' | 'password';
  name: string;
  errorMessage?: string;
  className?: string;
  labelLink?: React.ReactNode;
};

export function Input({ label, type, name, className, labelLink, errorMessage }: InputProps) {
  const form = useFormContext();

  const id = useMemo(() => Math.random().toString(36).substring(2), []);

  return (
    <div>
      {label && (
        <div className="flex justify-between">
          <label htmlFor={id} className="text-sm font-normal mb-2 block">
            {label}
          </label>

          {labelLink}
        </div>
      )}
      <input
        type={type}
        id={id}
        className={cn(
          'py-1 px-3 bg-[#0d1117] rounded-md border border-[#30363d] caret-white text-sm focus:outline-none focus:border focus:border-[#2f81f7] transition-colors',
          className,
        )}
        {...form.register(name)}
      />
      {errorMessage && <span className="text-xs text-red-500">{errorMessage}</span>}
    </div>
  );
}
