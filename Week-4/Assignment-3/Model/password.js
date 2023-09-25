import bcrypt from "bcrypt";

export async function hashPassword(password) {
  const saltRound = 10;
  const userPassword = await bcrypt.hashSync(password, saltRound);

  return userPassword;
}

export async function comparePassword(enterEmail, hashPassword) {
  const isValid = await bcrypt.compareSync(enterEmail, hashPassword);
  return isValid;
}
