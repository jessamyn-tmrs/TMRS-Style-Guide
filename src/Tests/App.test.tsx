import { render, screen } from '@testing-library/react';
import App from "../App.tsx";

it("should display nav bar link 'Web Components'", () => {
    render(<App />);
    const message = screen.queryByText(/web components/i);
    expect(message).toBeVisible()
});