document.getElementById('quoteForm').addEventListener('submit',function(e){
 e.preventDefault();
 const d=new FormData(this);
 const subject='Запрос на расчёт перевозки — FromTur Logistics';
 const body=`Здравствуйте!%0D%0A%0D%0AПрошу рассчитать перевозку:%0D%0AОткуда: ${encodeURIComponent(d.get('from'))}%0D%0AКуда: ${encodeURIComponent(d.get('to'))}%0D%0AГруз: ${encodeURIComponent(d.get('cargo'))}%0D%0AВес / объём: ${encodeURIComponent(d.get('size'))}%0D%0AТелефон / WhatsApp: ${encodeURIComponent(d.get('phone'))}%0D%0A%0D%0AОтправлено с сайта FromTur Logistics.`;
 window.location.href=`mailto:meiralysuleyman@fromturlojistik.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});