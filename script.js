function sendLead(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const text=encodeURIComponent(`Здравствуйте! Заявка с сайта D.Academy@tr\nИмя: ${name}\nТелефон: ${phone}`);
  // Перед запуском замените номер ниже на WhatsApp школы в международном формате.
  const whatsappNumber="";
  if(whatsappNumber){ window.open(`https://wa.me/${whatsappNumber}?text=${text}`,"_blank"); }
  else { alert("Спасибо! Форма работает. Перед запуском подключим WhatsApp школы."); }
  return false;
}