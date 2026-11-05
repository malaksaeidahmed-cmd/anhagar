# موقع أنهاجر إيجيبت (anhagar.tech)
موقع ثابت بدون build: مجلد `site/` هو الموقع كله.
1. ارفع المحتوى على ريبو public، وفي Settings > Pages اختر Source: GitHub Actions.
2. عدّل رقم واتساب في `site/assets/main.js` (ابحث عن 20XXXXXXXXXX) وفي `site/index.html`.
3. Settings > Pages > Custom domain: anhagar.tech، ثم سجلات DNS (4 A + 4 AAAA للجذر، وCNAME لـ www) وفعّل Enforce HTTPS.
