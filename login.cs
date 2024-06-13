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
        }

        private void Signup(object sender, EventArgs e)
        {
            CriarContaForm criarContaForm = new CriarContaForm();
            criarContaForm.Show();
            this.Hide();
        }

        private void ForgotPassword(object sender, EventArgs e)
        {
            RecuperarSenhaForm recuperarSenhaForm = new RecuperarSenhaForm();
            recuperarSenhaForm.Show();
            this.Hide();
        }
    }
}