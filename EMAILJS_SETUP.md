# EmailJS contact form setup

The site is static, so the browser uses the EmailJS public SDK. Only the EmailJS public key and non-secret service/template IDs are exposed to visitors; never add an SMTP password or EmailJS private key.

1. Create an EmailJS email service and a template.
2. Set the template's **To Email** to `wearetechtunisia@gmail.com` in the EmailJS dashboard. Set **Reply-To** to `{{reply_to}}` and use `{{from_name}}`, `{{reply_to}}`, `{{service}}`, and `{{message}}` in the message body.
3. Copy `.env.example` to `.env` and set `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY`. Alternatively, provide those environment variables in the build environment.
4. Run `node scripts/generate-email-config.mjs` before publishing. The script generates `assets/js/email-config.js` for the static site.
5. Restrict allowed origins and configure rate limits in the EmailJS dashboard.

The form works on both the homepage and Contact page. Without EmailJS configuration it reports that sending is unavailable instead of opening an external mail application.

Open the site through an HTTP/HTTPS address when testing. EmailJS rejects submissions from local `file://` pages; use the published website or a local web server.
