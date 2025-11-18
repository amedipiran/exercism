export const hey = (message) => {
  // trim the message
  const trimmed = message.trim();

  if(trimmed === "") return "Fine. Be that way!";

  // Question helper
  const isQuestion = trimmed.endsWith("?");

  // hasletters
  const hasLetters = /[a-z]/i.test(message)

  //isYelling
  const isYelling = hasLetters && trimmed === trimmed.toUpperCase();

  if(isYelling && isQuestion) return "Calm down, I know what I'm doing!"

  if(isQuestion) return "Sure.";

  if(isYelling) return "Whoa, chill out!";

  return "Whatever.";
};