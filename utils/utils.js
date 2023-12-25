exports.sanitizeStringToObject = (str) => {
  // Replace escaped newlines with actual newlines
  str = str.replace(/\\n/g, '\n');

  // Replace escaped characters like "&amp;" with their respective characters
  str = str.replace(/&amp;/g, '&');

  // Replace double backslashes with single backslashes
  str = str.replace(/\\\\/g, '\\');

  // Parse the sanitized string to a JSON object
  try {
    const jsonObject = JSON.parse(str);
    return jsonObject;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
};
