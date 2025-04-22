export type Variant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  variant?: Variant;
  disabled?: boolean;
  children: React.ReactNode;
}
