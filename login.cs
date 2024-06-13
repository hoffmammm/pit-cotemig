using System;
using System.Windows.Forms;

namespace TelaDeLogin
{
    public partial class LoginForm : Form
    {
        public LoginForm()
        {
            InitializeComponent();
            loginForm.Submit += Login;
            signupButton.Click += Signup;
            forgotPasswordButton.Click += ForgotPassword;
        }

        private void Login(object sender, EventArgs e)
        {
            string username = usernameTextBox.Text;
            string password = passwordTextBox.Text;
            // Aqui você pode adicionar a lógica para autenticar o usuário
            // Por exemplo, você pode verificar se as credenciais estão corretas no banco de dados
        }

        private void Signup(object sender, EventArgs e)
        {
            MessageBox.Show("Implemente a funcionalidade de criar conta!");
        }

        private void ForgotPassword(object sender, EventArgs e)
        {
            string email = Microsoft.VisualBasic.Interaction.InputBox("Digite seu e-mail para recuperar a senha:");
            if (!string.IsNullOrEmpty(email))
            {
                // Aqui você pode adicionar a lógica para enviar um e-mail de recuperação de senha
                MessageBox.Show("Um e-mail de recuperação foi enviado para " + email);
            }
        }
    }
}