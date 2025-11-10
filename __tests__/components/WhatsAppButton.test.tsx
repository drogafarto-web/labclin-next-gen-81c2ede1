import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WhatsAppButton from '@/components/WhatsAppButton';

describe('WhatsAppButton', () => {
  it('deve renderizar o botão', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
  });

  it('deve ter o atributo aria-label correto', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByLabelText('Fale conosco no WhatsApp');
    expect(link).toBeInTheDocument();
  });

  it('deve ter o ícone de mensagem', () => {
    render(<WhatsAppButton />);
    
    const button = screen.getByRole('link');
    const svg = button.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('deve gerar URL do WhatsApp corretamente', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link.href).toContain('https://api.whatsapp.com/send');
    expect(link.href).toContain('phone=5532991990239');
    expect(link.href).toContain('text=');
  });

  it('deve abrir em nova aba', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('deve ter classes de estilo corretas', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('fixed', 'bottom-6', 'right-6', 'z-50');
  });

  it('deve exibir tooltip no hover', () => {
    render(<WhatsAppButton />);
    
    const tooltip = screen.getByText('Fale conosco no WhatsApp');
    expect(tooltip).toBeInTheDocument();
  });

  it('deve ter animação de pulse', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link');
    const pulseRing = link.querySelector('.animate-ping');
    expect(pulseRing).toBeInTheDocument();
  });

  it('deve ter sombra adequada', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('shadow-[0_8px_30px_rgb(37,211,102,0.4)]');
  });

  it('deve codificar a mensagem na URL', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link') as HTMLAnchorElement;
    const url = new URL(link.href);
    const text = url.searchParams.get('text');
    
    expect(text).toBeTruthy();
    expect(text).toContain('Olá');
  });

  it('deve ter cor de fundo do WhatsApp', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('bg-[#25D366]');
  });

  it('deve ter hover effect', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('hover:bg-[#20BD5A]', 'hover:scale-110');
  });

  it('deve estar sempre visível (posição fixa)', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('fixed');
  });

  it('deve ter z-index alto para ficar sobre outros elementos', () => {
    render(<WhatsAppButton />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveClass('z-50');
  });

  it('deve ter formato circular', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('rounded-full');
  });

  it('deve ter dimensões corretas', () => {
    const { container } = render(<WhatsAppButton />);
    
    const button = container.querySelector('button');
    expect(button).toHaveClass('h-16', 'w-16');
  });
});
