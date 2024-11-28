// Função de cadastro
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const user = { username, email, password };
  
    // Salvar usuário no LocalStorage
    localStorage.setItem('user', JSON.stringify(user));
    alert('Cadastro realizado com sucesso!');
    window.location.href = 'login.html'; // Redireciona para a página de login
  });
  