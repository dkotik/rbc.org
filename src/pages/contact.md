---
title: "RBC: Contact"
layout: "@layouts/default.astro"
setup: |
  import ContactForm from "@components/contact-form.svelte";
---

# Contact

<ContactForm client:load endpoint="https://truthonly.com/api/v1/contact.json">
<h1>Thank you!</h1>
<p>Your message was delivered.</p>
</ContactForm>
