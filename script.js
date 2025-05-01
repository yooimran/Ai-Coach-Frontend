document.querySelectorAll('.toggle-faq').forEach(button => {
  button.addEventListener('click', () => {
    const target = document.getElementById(button.getAttribute('data-target'));
    target.classList.toggle('hidden');
    button.textContent = target.classList.contains('hidden') ? '+' : '-';
  });
});


const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// ChatBox

const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-button');

sendButton.addEventListener('click', () => {
  const userMessage = chatInput.value.trim();
  if (userMessage) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('flex', 'gap-4', 'justify-end');
    messageDiv.innerHTML = `
<div class="p-4 rounded-lg text-gray-700 bg-blue-100">
  <p>${userMessage}</p>
</div>
<div class="w-10 h-10 bg-gray-400 rounded-full flex-shrink-0"></div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    chatInput.value = '';
  }
});

chatInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    sendButton.click();
  }
});
