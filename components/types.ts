import { UserModel } from '../store/types/user';

export interface HeaderProps {
  user: UserModel | null;
  isLoading: boolean;
  buyPoints: (points: number) => void;
  isOpen?: boolean;
  onToggle?: () => void;
}
