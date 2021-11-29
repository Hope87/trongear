const domain = 'http://trongear.loc/api';

export const loginPostFetch = (setIsLogin, user) => {
    const resp = fetch(`${domain}/auth/login`, {
      method: "POST",
      headers: {
        'Origin': 'http://localhost',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: '*/*',
      },
      body: `username=${user.userName}&password=${user.password}`
    })
    .then(resp => resp.json())
      .then(respData => {
        if (!respData.data) {
          console.log('Неверное имя пользователя или пароль!')
        } else {
          localStorage.setItem("access_token", respData.data.access_token)
          setIsLogin(true);
        }
    })
}

export const RightToken = (setIsLogin) => {
    const resp = fetch(`${domain}/users/is-authorized`, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
        Accept: '*/*',
      },
    })
    .then(resp => {
        if(resp.status !== 200){
            setIsLogin(false);
        }
    })
}
