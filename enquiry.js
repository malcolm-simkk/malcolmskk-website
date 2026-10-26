(() => {
  const form = document.getElementById('enquiry-form');
  if (!form) return;
  const service = document.getElementById('enquiry-service');
  const topic = document.getElementById('enquiry-topic');
  const topicLabel = document.getElementById('topic-label');
  const level = document.getElementById('enquiry-level');
  const goals = document.getElementById('enquiry-goals');
  const message = document.getElementById('enquiry-message');
  const status = document.getElementById('copy-status');
  const options = {
    maths: ['Mathematics (Form 1–5)', 'Additional Mathematics (Form 4–5)', 'IGCSE Mathematics', 'A Level Mathematics', 'Competitive Mathematics — Kangaroo Math', 'Competitive Mathematics — IMONST', 'Competitive Mathematics — Other competitions', 'Not sure yet'],
    chess: ['Beginner', 'Intermediate', 'Advanced', 'Not sure yet']
  };
  function update() {
    const lines = ['Hi Malcolm! I’d like to enquire about ' + (service.value === 'chess' ? 'chess coaching.' : 'mathematics tutoring.'), '', (service.value === 'chess' ? 'Experience: ' : 'Subject: ') + topic.value];
    if (service.value === 'maths' && level.value.trim()) lines.push('Current level: ' + level.value.trim());
    if (goals.value.trim()) lines.push('What I’d like help with: ' + goals.value.trim());
    lines.push('', 'Could you share your availability, lesson arrangements and fees? Thank you!');
    message.value = lines.join('\n');
    status.textContent = '';
  }
  function changeService() {
    topic.replaceChildren(...options[service.value].map(label => new Option(label, label)));
    topicLabel.textContent = service.value === 'chess' ? 'Your chess experience' : 'Subject or competition';
    document.getElementById('level-field').hidden = service.value === 'chess';
    update();
  }
  if (new URLSearchParams(location.search).get('service') === 'chess') service.value = 'chess';
  service.addEventListener('change', changeService);
  form.addEventListener('input', update);
  form.addEventListener('submit', event => event.preventDefault());
  document.getElementById('copy-enquiry').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(message.value);
      status.textContent = 'Copied. Open WhatsApp, paste your message and send it when you’re ready.';
    } catch {
      message.focus();
      message.select();
      status.textContent = 'Copy the selected message manually, then paste it into WhatsApp.';
    }
  });
  changeService();
})();
