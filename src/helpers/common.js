
const isEqual = require('lodash.isequal');
const Cookies = require('js-cookie');

export const manipulateNumberData = (data) => {
  let num = data
  if(!data) {
    return 0
  }
  if(typeof data === 'string') {
    return parseInt(num)
  }
  return data
}

export const ordinal = (number) => {
  const english_ordinal_rules = new Intl.PluralRules("en", {
      type: "ordinal"
  });
  const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
  }
  const suffix = suffixes[english_ordinal_rules.select(number)];
  return (suffix);
}

export const isDataMatching = (ansIds, options) => {
  const correctAnsIds =  []
  options && options.map((option, index) => {
    if(option.correct_answer) 
      correctAnsIds.push(option.option_id)
  })

  return isEqual(correctAnsIds.sort(), ansIds.sort())
}

export const isMutliSelectQuestion = (question_type) => {
  return question_type === 'mcq-text-multi' || question_type === 'mcq-image-multi'
}

export const isAnonymousUser = () => {
  return Cookies.get("mySPHUserType") === "y-anoy"
}
