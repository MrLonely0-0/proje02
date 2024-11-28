// função de login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    

    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      alert('Login bem-sucedido!');
      window.location.href = 'index.html'; // redireciona para a página inicial
    } else {
      alert('Usuário ou senha inválidos!');
    }
  });
  