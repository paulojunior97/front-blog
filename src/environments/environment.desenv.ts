export const environment = {
  production: false,
  apiUrl: 'http://localhost:8090',
  header: {
    acoesHeaderAdmin: [
      {
        descricao: 'Cadastrar usuário',
        icon: 'add_circle_outline',
        rota: ['usuarios']
      }
    ],
    acoesHeaderCliente: [
      {
        descricao: 'Novo post',
        icon: 'add_circle_outline',
        rota: ['blog', 'cadastro-post']
      },
      {
        descricao: 'Novo álbum',
        icon: 'add_circle_outline',
        rota: ['blog', 'cadastro-album']
      }
    ]
  }
};
