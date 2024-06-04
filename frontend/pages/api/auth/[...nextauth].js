import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Aqui você deve adicionar sua lógica de verificação de usuário.
        // Por exemplo, verificar se o usuário existe no banco de dados e se a senha está correta.
        const user = { id: 1, name: "User", email: "user@example.com" }; // Exemplo de usuário autenticado

        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/auth/signin',  // Caminho para a página de autenticação
    error: '/auth/error',    // Caminho para a página de erro de autenticação
    verifyRequest: '/auth/verify-request',  // Caminho para a página de verificação de requisição (para redefinição de senha e verificação de email)
    newUser: null            // Caso queira uma página para novos registros de usuário (opcional)
  }
});