import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Loading, { LoadingSpinner, LoadingWithText } from './Loading';

describe('Loading Component', () => {
  it('debería renderizar el spinner', () => {
    const { container } = render(<LoadingSpinner />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeTruthy();
  });

  it('debería mostrar texto personalizado', () => {
    render(<LoadingWithText text="Cargando productos..." />);
    expect(screen.getByText('Cargando productos...')).toBeInTheDocument();
  });

  it('debería renderizar diferentes tamaños', () => {
    const { container } = render(<LoadingSpinner size="lg" />);
    const spinner = container.querySelector('.h-12.w-12');
    expect(spinner).toBeTruthy();
  });
});