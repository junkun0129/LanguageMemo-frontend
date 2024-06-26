export const getRequest = async (endpoint: string) => {
  const url = "http://localhost:3000" + endpoint;
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("error occured");
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const postRequest = async (endpoint: string, body: Object) => {
  const url = "http://localhost:3000" + endpoint;
  fetch(url, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("error occured");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
