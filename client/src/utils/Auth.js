export default {
  getJWT: () => {
      try {
          let token = localStorage.getItem("jwtToken");
          // To access the payload split the jwt token into its header.payload.signature parts and grab just the payload
          let enc = token.replace(/JWT\s+/).split(".")[1];
          // Then parse the base64
          return JSON.parse(window.atob(enc));

      } catch (e) {
          return null
      }
  }
}