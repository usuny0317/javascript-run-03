/**
 * Q. 로그인 확인 함수
 *
 * id와 pw를 입력받아, id가 "admin"이고 pw가 "1234"인 경우 "ok"를 반환하고, 그렇지 않은 경우 "fail"을 반환하는 함수를 작성하세요.
 * 단, Promise 사용하여 비동기로 작성하세요.
 *
 * @param {string} id
 * @param {string} pw
 * @returns {Promise<string>} "ok" or "fail"
 */

// TODO: loginRequest 함수를 작성하세요.
async function loginRequest(id, pw) {
    return new Promise((resolve)=>{
        if(id=="admin"&&pw=="1234"){
            resolve("ok");
        }
        else{resolve("fail");} 
    })
    //new promise 하고... return 대신에 resolve 사용...? 
        //오답 완료!!
        //1. retrun new.. 인데, return 하지 않아서 반환을 안해줌
        //2. resolve를 괄호 안에 작성하지 않아서, resolve(ok)랑 resolve(fail)제대로 동작 xx 
        //return new Promise((resolve)=>{}) 형태 잊지 말것!!!!
}

// export를 수정하지 마세요.
export { loginRequest };
