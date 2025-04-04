import axios from "axios";

const config = useRuntimeConfig();
const apiUrl = config.public.url;

const ping = async (): Promise<boolean> => {
  try {
    await axios.get(apiUrl, { timeout: 500 });
    return true;
  } catch (erorr) {
    return false;
  }
};

export default ping;
