export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  ownerId: string | null;
}
