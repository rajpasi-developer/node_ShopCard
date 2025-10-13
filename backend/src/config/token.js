import jwt from "jsonwebtoken";

export const genToken = async (userId) => {
  try {
    const token = await jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (err) {
    console.error("Error generating token:", err);
  }
};

export const genToken1 = async (email) => {
  try {
    const token = await jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (err) {
    console.error("Error generating token:", err);
  }
};
