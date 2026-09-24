// FAQ accordion
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach((el) => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

// WhatsApp floating button
function toggleWa() {
  document.getElementById('waFloat').classList.toggle('open');
}

// Zona horaria: horario base Colombia (UTC-5), Lun-Vie 8am-6pm, Sáb 8am-1pm
const TZ_OFFSETS = {
  mx: -6, gt: -6, cr: -6, pa: -5,
  cu: -5, do: -4, pr: -4,
  co: -5, ve: -4, ec: -5, pe: -5, bo: -4, cl: -4, ar: -3, py: -4, uy: -3,
  es: 1, gb: 0, de: 1, it: 1, fr: 1,
  'us-e': -5, 'us-c': -6, 'us-m': -7, 'us-p': -8,
  au: 10,
};

function formatHour(h, diff) {
  let a = h + diff;
  a = ((a % 24) + 24) % 24;
  const suffix = a >= 12 ? 'p. m.' : 'a. m.';
  let h12 = Math.round(a) % 12;
  if (h12 === 0) h12 = 12;
  return `${h12}:00 ${suffix}`;
}

function handleCountry(value) {
  const result = document.getElementById('tzResult');
  if (!value || TZ_OFFSETS[value] === undefined) {
    result.classList.remove('visible');
    return;
  }
  const diff = TZ_OFFSETS[value] - TZ_OFFSETS['co'];
  document.getElementById('tzWeekday').textContent = `${formatHour(8, diff)} – ${formatHour(18, diff)}`;
  document.getElementById('tzSaturday').textContent = `${formatHour(8, diff)} – ${formatHour(13, diff)}`;
  result.classList.add('visible');
}
