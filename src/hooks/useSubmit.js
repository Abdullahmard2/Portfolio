import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);
    try {
      await wait(2000);
      if (Math.random() < 0.5) {
        throw new Error("Something went wrong");
      }
      return { type: "success", message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!` };
    } catch (error) {
      return { type: "error", message: "Something went wrong, please try again later!" };
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
