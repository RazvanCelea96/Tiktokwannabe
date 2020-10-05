import axios from 'axios';

export async function login() {
  try {
    const res = await axios.post(
      'http://ec2-18-191-105-106.us-east-2.compute.amazonaws.com:3009/api/users/signin',
      {
        email: 'tsovakh4@gmail.com',
        password: 'tsovak2002',
      },
    );
    console.log('aici e pe res');
    console.log(res);
    const token = res.data.userJwt;
    localStorage.setItem('jwtToken', token);
    console.log('this is the token', token);
  } catch (err) {
    console.log('aici e pe err');
    console.log(err);
  }
}
