document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const responseMessage = document.getElementById('form-response');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        form.reset();
        responseMessage.classList.remove('hidden');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form.');
    }
  });
});
