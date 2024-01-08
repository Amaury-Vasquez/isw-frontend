import clsx from 'clsx';
import { Variant } from '@/types/style';

export function getTextVariant(variant: Variant) {
  return clsx({
    'text-primary': variant === 'primary',
    'text-accent': variant === 'accent',
    'text-success': variant === 'success',
    'text-warning': variant === 'warning',
    'text-error': variant === 'error',
    'text-secondary': variant === 'secondary',
  });
}
