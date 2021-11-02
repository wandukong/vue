import axios from "axios";

function join(user){ // user = {id: xxx, name:xxx, password:xxx, role:xxx, email: xxx}
  // axios의 모든 메소드는 promise를 return 한다.
  return axios.post(
    "/member/join2",
    // json으로 보낼때는 객체로 보낸다.
    {
      mid : user.id,
      mname: user.name,
      mpassword:user.password,
      mrole: user.role,
      memail:user.email
    }
  );
}

function login(user){ // user = {id: xxx, password:xxx}
  return axios.post(
    "/member/login1",
    // 쿼리스트링으로 보낼 때는, 백틱을 사용한다.
    `mid=${user.id}&mpassword=${user.password}`
  );
}

export default {
  join,
  login
}