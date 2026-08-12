const btn = document.querySelector('#collect-metrics-btn');


btn.addEventListener('click', () => {
    gtag('event', 'user_click_btn');
    console.log('Дані відправлено!');
});
