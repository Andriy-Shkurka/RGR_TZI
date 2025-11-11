const log = (message) => {
    const consoleLog = document.getElementById("consoleLog");
    const line = document.createElement("div");
    line.textContent = `[${new Date().toLocaleTimeString()}] ${message}`;
    consoleLog.appendChild(line);
    consoleLog.scrollTop = consoleLog.scrollHeight;
  };
  
  document.getElementById("encryptBtn").addEventListener("click", () => {
    const text = document.getElementById("encryptInput").value;
    const key = document.getElementById("encryptKey").value;
  
    if (!text || !key) {
      log("⚠️ Введіть текст і ключ для шифрування!");
      return;
    }
  
    log("🔐 Початок шифрування...");
    try {
      const encrypted = CryptoJS.AES.encrypt(text, key).toString();
      document.getElementById("encryptOutput").value = encrypted;
      log("✅ Шифрування завершено!");
    } catch (e) {
      log("❌ Помилка при шифруванні: " + e.message);
    }
  });
  
  document.getElementById("decryptBtn").addEventListener("click", () => {
    const cipherText = document.getElementById("decryptInput").value;
    const key = document.getElementById("decryptKey").value;
  
    if (!cipherText || !key) {
      log("⚠️ Введіть шифр і ключ для розшифрування!");
      return;
    }
  
    log("🔓 Початок розшифрування...");
    try {
      const bytes = CryptoJS.AES.decrypt(cipherText, key);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  
      if (!decrypted) throw new Error("Неправильний ключ або шифр!");
      document.getElementById("decryptOutput").value = decrypted;
      log("✅ Розшифрування завершено!");
    } catch (e) {
      log("❌ Помилка при розшифруванні: " + e.message);
    }
  });
  