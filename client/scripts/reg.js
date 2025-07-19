
// document.getElementById('regForm').addEventListener('submit', async (event) => {
//     event.preventDefault(); 

//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     if (password !== confirmPassword) {
//         alert('Пароли не совпадают');
//         return;
//     }

//     const userData = {
//         username: email, 
//         password: password,
//     };

//     try {
//         const response = await fetch('/api/users/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         });

//         if (!response.ok) {
//             const errorData = await response.json();
//             throw new Error(errorData.message || 'Ошибка регистрации');
//         }

//         const result = await response.json();
//         alert(result.message); 
//         redirect('/pages/auth.html');
//     } catch (error) {
//         alert(error.message); 
//     }
// });