import { render, screen } from '@testing-library/react';

import { ErrorAlert } from './ErrorAlert';

describe('ErrorAlert Component', () => {
    it('should display the error message passed to it', () => {
        const errorMessage = 'This is a test error message';
        render(<ErrorAlert message={errorMessage} />);

        expect(screen.getByRole('alert')).toHaveTextContent('Error!');
        expect(screen.getByRole('alert')).toHaveTextContent(errorMessage);
    });

    afterEach(() => {
        jest.resetAllMocks();
    });
});