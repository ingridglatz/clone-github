import { cva } from 'class-variance-authority';
import { cn } from '../lib/utils';

type BannerProps = {
  type: 'success' | 'error';
  message: string;
  className: string;
};

const variants = cva('bg-opacity-25 border p-4 rounded-md text-sm', {
  variants: {
    type: {
      success: 'bg-[#238636] border-[#238636]',
      error: ' bg-red-500 border-red-500',
    },
  },
});

export function Banner({ type, message, className }: BannerProps) {
  return <div className={cn(variants({ type }), className)}>{message}</div>;
}
