import axios from "axios";

const ping = async (): Promise<boolean> => {
  const config = useRuntimeConfig();
  const apiUrl = config.public.url;
  try {
    await axios.get(apiUrl, { timeout: 500 });
    return true;
  } catch (erorr) {
    return false;
  }
};

export default ping;
