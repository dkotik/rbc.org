---
title: "РБЦ: Контакты"
layout: "@layouts/default.astro"
setup: |
  import ContactForm from "@components/contact-form.svelte";
---

# Контакт

<ContactForm client:load locale="ru" endpoint="https://truthonly.com/api/v1/contact.json">
<h1>Спасибо!</h1>
<p>Ваше сообщение было отправлено.</p>
</ContactForm>
