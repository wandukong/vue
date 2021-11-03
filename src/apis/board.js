import axios from "axios"

function getBoardList(pageNo=1){
  return axios.get(
    `/board/list?pageNo=${pageNo}`
  );
}

function createBoard(multipartFormData){
  return axios.post(
    "/board/create",
    multipartFormData
  );
}

function readBoard(bno, hit){
  return axios.get(`/board/${bno}`, {params:{hit}})
}

function updateBoard(multipartFormData){
  return axios.post(
    "/board/update",
    multipartFormData
  );
}


function deleteBoard(bno){
  return axios.delete(
    `/board/delete/${bno}`
  );
}

export default {
  getBoardList,
  createBoard,
  readBoard,
  updateBoard,
  deleteBoard
}