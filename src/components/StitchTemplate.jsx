import { useEffect, useRef } from 'react';
import { defaultWhatsappMessage, whatsappLink } from '../data/businessData';

export function StitchTemplate({ html }) {
  const root = useRef(null);
  useEffect(() => {
    const host = root.current;
    const existingMenu = host.querySelector('#mobile-nav');
    const header = host.querySelector('header.sticky');
    let generatedMenu;
    let generatedButton;

    if (!existingMenu && header) {
      const desktopNav = header.querySelector('nav');
      const links = [...(desktopNav?.querySelectorAll('a') ?? [])]
        .map((link) => `<a href="${link.getAttribute('href')}">${link.textContent.trim()}</a>`)
        .join('');
      const usesXlBreakpoint = desktopNav?.className.includes('xl:flex');
      const headerRow = header.querySelector(':scope > div > div') ?? header.querySelector(':scope > div') ?? header;
      generatedButton = document.createElement('button');
      generatedButton.type = 'button';
      generatedButton.className = `mobile-menu-toggle ${usesXlBreakpoint ? 'mobile-menu-toggle--xl' : 'mobile-menu-toggle--lg'}`;
      generatedButton.setAttribute('aria-label', 'Abrir menú');
      generatedButton.setAttribute('aria-expanded', 'false');
      generatedButton.innerHTML = '<span class="material-symbols-outlined" aria-hidden="true">menu</span>';
      generatedMenu = document.createElement('nav');
      generatedMenu.className = `mobile-navigation ${usesXlBreakpoint ? 'mobile-navigation--xl' : 'mobile-navigation--lg'}`;
      generatedMenu.setAttribute('aria-label', 'Navegación móvil');
      generatedMenu.innerHTML = `${links}<a class="mobile-navigation__whatsapp" href="https://wa.me/549110000000" target="_blank" rel="noreferrer">WhatsApp</a>`;
      headerRow.append(generatedButton);
      header.append(generatedMenu);
    }

    const onClick = (event) => {
      const calculatorButton = event.target.closest('.calc-step-btn');
      if (calculatorButton) {
        event.preventDefault();
        const group = calculatorButton.parentElement;
        group?.querySelectorAll('.calc-step-btn').forEach((item) => item.classList.remove('active'));
        calculatorButton.classList.add('active');
      }
      const button = event.target.closest('[aria-label="Abrir Menú"], [aria-label="Abrir menú"], .mobile-menu-toggle');
      if (button) {
        event.preventDefault();
        const menu = existingMenu ?? generatedMenu;
        if (menu) {
          const open = existingMenu ? menu.classList.toggle('hidden') === false : menu.classList.toggle('is-open');
          button.setAttribute('aria-expanded', String(open));
        }
      }
      const menuLink = event.target.closest('#mobile-nav a, .mobile-navigation a');
      if (menuLink) {
        existingMenu?.classList.add('hidden');
        generatedMenu?.classList.remove('is-open');
        host.querySelector('[aria-label="Abrir Menú"], [aria-label="Abrir menú"]')?.setAttribute('aria-expanded', 'false');
      }
    };
    const onSubmit = (event) => {
      const form = event.target;
      if (!form.matches('form')) return;
      event.preventDefault();
      const existing = form.querySelector('[data-form-status]');
      if (existing) existing.remove();
      const status = document.createElement('p');
      status.dataset.formStatus = 'true';
      status.className = 'mt-4 rounded-lg bg-emerald-50 p-3 text-sm font-medium text-emerald-800';
      status.textContent = 'Tu consulta se envió correctamente. Te contactaremos a la brevedad.';
      form.append(status);
      form.reset();
    };
    host.querySelectorAll('a[href*="wa.me"]').forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (href === `https://wa.me/549110000000`) anchor.href = whatsappLink(defaultWhatsappMessage);
      anchor.target = '_blank'; anchor.rel = 'noreferrer';
    });
    host.addEventListener('click', onClick);
    host.addEventListener('submit', onSubmit);
    return () => {
      host.removeEventListener('click', onClick); host.removeEventListener('submit', onSubmit);
      generatedMenu?.remove(); generatedButton?.remove();
    };
  }, [html]);
  return <main className="site-template" ref={root} dangerouslySetInnerHTML={{ __html: html }} />;
}
