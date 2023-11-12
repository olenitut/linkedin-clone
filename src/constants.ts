// EMAIL:
// The local part (before the '@' symbol) should be between 1 and 30 characters and not contain spaces or the '@' symbol.
// The domain part (after the '@' symbol and before the '.') should be between 1 and 20 characters and not contain spaces or the '@' symbol.
// The top-level domain (after the dot) should be between 1 and 20 characters and not contain spaces or the '@' symbol.

export const EMAIL_REGEX = /^[^\s@]{1,30}@[^\s@]{1,20}\.[^\s@]{1,20}$/;

//PASSWORD:
// Contains at least one uppercase letter.
// Contains at least one lowercase letter.
// Contains at least one digit.
// Contains at least one of the specified special characters.
// Is at least 8 characters long and no longer than 50 characters.

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,50}$/;
