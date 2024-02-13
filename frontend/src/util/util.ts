export const getTypeColor = (type: 'personal' | 'savings' | 'business') => {
  switch (type) {
    case 'savings':
      return 'bg-pale-purple';
    case 'business':
      return 'bg-soft-orange';
    case 'personal':
      return 'bg-light-gray';
    default:
      return 'bg-lighter-gray';
  }
};
