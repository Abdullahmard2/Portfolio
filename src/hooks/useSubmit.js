import { useState } from "react";

const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);

  const submit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://formspree.io/f/https://formspree.io/f/xeajaajp", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: JSON.stringify({
          name: data.firstName,
          email: data.email,
          type: data.type,
          message: data.comment,
        }),
      });

      if (response.ok) {
        return { type: "success", message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!` };
      } else {
        throw new Error("Formspree error");
      }
    } catch (error) {
      return { type: "error", message: "Something went wrong, please try again later!" };
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, submit };
};

export default useSubmit;
