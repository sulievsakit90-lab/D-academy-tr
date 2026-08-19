document.getElementById('quoteForm').addEventListener('submit', function(e){
  e.preventDefault();
  const d = new FormData(this);
  const subject = 'Запрос расчёта перевозки — FROMTUR';
  const body = [
    'Здравствуйте! Хочу получить расчёт перевозки.',
    '',
    'Откуда: ' + (d.get('from') || ''),
    'Куда: ' + (d.get('to') || ''),
    'Груз: ' + (d.get('cargo') || ''),
    'Вес / объём: ' + (d.get('size') || ''),
    'Телефон: ' + (d.get('phone') || '')
  ].join('\n');
  location.href = 'mailto:meiralysuleyman@fromturlojistik.com?subject='+
    encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
});
document.querySelectorAll('details').forEach(d => d.addEventListener('toggle', () => {
  if(d.open) document.querySelectorAll('details').forEach(x => { if(x!==d) x.open=false; });
}));
