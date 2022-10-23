import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Todo from './index';

describe("Todo Testleri", () => {
    let button, input;

    beforeEach(() => {
        render(<Todo />);
        button = screen.getByText('Add');
        input = screen.getByLabelText('Text');
    });

    it('Varsayılan olarak verilen 3 nesene render edilmeli', () => {
        const items = screen.getAllByText(/item/i);
        expect(items.length).toEqual(3);
    });

    test('Input ve button ekranda bulunmalı', () => {
        expect(button).toBeInTheDocument();
        expect(input).toBeInTheDocument();
    });

    test('Inputa string girilip butona basılınca listeye eklenmeli', () => {
        // inputu doldur
        const name = "AB";
        userEvent.type(input, name);

        // butona tıkla
        userEvent.click(button);

        expect(screen.getByText(name)).toBeInTheDocument();
    })
});