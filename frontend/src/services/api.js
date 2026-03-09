import axios from "axios";

const API = axios.create({
      baseURL: "http://localhost:5000/api"
});

API.interceptors.request.use((config) => {

      const token = localStorage.getItem("token");

      if (token) {
            config.headers.Authorization = `Bearer ${token}`;
      }

      return config;

});

/* LISTS */

export const getLists = async (boardId) => {

      const res = await API.get(`/lists/${boardId}`);

      console.log("Lists:", res.data);

      return res.data;

};

/* CARDS */

export const getCards = async (listId) => {

      const res = await API.get(`/cards/${listId}`);

      console.log("Cards:", res.data);

      return res.data;

};


export const updateCardList = async (cardId, listId) => {

      const res = await API.put(`/cards/${cardId}`, {
            listId
      });

      console.log("Card updated:", res.data);

      return res.data;

};

export default API;