export type NotificationVariant = 'success' | 'error';

export interface NotificationProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
  type: NotificationVariant;
}
