// Ambil elemen dari HTML
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Fungsi menampilkan pesan di layar
function addMessage(sender, text) {
  const message = document.createElement('div');
  message.classList.add('message', sender);
  message.innerText = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Fungsi respon chatbot Sahara
function getSaharaResponse(input) {
  input = input.toLowerCase();

  if (input.includes('halo') || input.includes('hai')) {
    return "Hai! Aku Sahara 🌸 Senang bisa ngobrol denganmu. Lagi apa nih?";
  } else if (input.includes('percaya diri')) {
    return "Rasa percaya diri itu tumbuh dari mengenal diri sendiri. Kamu boleh cerita, apa yang bikin kamu kurang percaya diri?";
  } else if (input.includes('teman') || input.includes('bergaul')) {
    return "Bergaul itu bisa dimulai dari hal kecil, seperti menyapa orang di sekitarmu. Mau aku bantu kasih tipsnya?";
  } else if (input.includes('stres') || input.includes('capek')) {
    return "Istirahat sebentar ya 🌿 Tarik napas dalam-dalam. Kadang kita cuma butuh waktu untuk tenang.";
  } else {
    return "Hmm, aku belum paham sepenuhnya. Tapi aku mau dengar lebih banyak kok 😊";
  }
}

// Fungsi kirim pesan
sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (text === '') return;

  addMessage('user', text);
  userInput.value = '';

  setTimeout(() => {
    const reply = getSaharaResponse(text);
    addMessage('sahara', reply);
  }, 500);
});
