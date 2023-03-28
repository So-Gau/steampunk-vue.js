import { unref } from 'vue'
import { useMutation } from 'vue-query'
import axios from "axios";

 export const useSendFormMutation = () => {
  return useMutation((post) =>
    axios
      .post("https://jsonplaceholder.typicode.com/posts", unref(post))
      .then((res) => res.data)
  );
}