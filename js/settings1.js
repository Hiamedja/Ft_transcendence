

async function showChangePassword() {

  document.getElementById('enable-2fa-overlay').classList.add('hidden');
  document.getElementById('disable-2fa-overlay').classList.add('hidden');
  document.getElementById('verify-2fa-overlay').classList.add('hidden');

  document.getElementById('change-password-overlay').classList.remove('hidden');
  
  await check2FAStatus('settings');
}
