document.addEventListener('DOMContentLoaded', () => {
  // 1. Интерактивные чипсы категорий и фильтров
  const filterChips = document.querySelectorAll('.chip');
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });

  // 2. Вкладки доставки в корзине
  const deliveryTabs = document.querySelectorAll('.d-tab');
  deliveryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      deliveryTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // 3. Степпер количества товара
  const qtySteppers = document.querySelectorAll('.qty-stepper, .qty-mini-stepper');
  qtySteppers.forEach(stepper => {
    const btns = stepper.querySelectorAll('button');
    const valEl = stepper.querySelector('span');
    if (btns.length === 2 && valEl) {
      btns[0].addEventListener('click', () => {
        let current = parseInt(valEl.textContent, 10);
        if (current > 1) valEl.textContent = current - 1;
      });
      btns[1].addEventListener('click', () => {
        let current = parseInt(valEl.textContent, 10);
        valEl.textContent = current + 1;
      });
    }
  });

  // 4. Аккордеон совместимости
  const accHeader = document.querySelector('.acc-header');
  if (accHeader) {
    accHeader.addEventListener('click', () => {
      const body = accHeader.nextElementSibling;
      if (body) {
        body.style.display = body.style.display === 'none' ? 'flex' : 'none';
      }
    });
  }

  // 5. Обратная связь кнопок быстрого добавления
  const addButtons = document.querySelectorAll('.btn-buy-icon, .feed-add-btn');
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.style.transform = 'scale(0.92)';
      setTimeout(() => {
        btn.style.transform = 'scale(1)';
        if (!btn.classList.contains('in-cart')) {
          btn.textContent = '✓';
          btn.classList.add('in-cart');
        }
      }, 150);
    });
  });
});