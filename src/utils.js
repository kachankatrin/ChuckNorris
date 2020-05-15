export const api = `https://api.chucknorris.io/jokes/`;
export const categories = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel"
];
export const dotedPagination = (current, last, li) => {
  let M = [li(1, "1")]
  if (last <= 9) {
    for (let i = 2; i <= last; i++) {
      M.push(li(i, `${i}`))
    }
  }
  if (last > 9 && current < 6) {
    for (let i = 2; i <= 7; i++) {
      M.push(li(i, `${i}`))
    }
    M.push(li(current + 3, '...'), li(last, `${last}`))
  }
  if (last > 9 && current >= 6 && last - current > 3) {
    M.push(li(current - 3, '...'));
    for (let i = current - 2; i <= current + 2; i++) {
      M.push(li(i, `${i}`))
    }
    M.push(li(current + 3, '...'), li(last, `${last}`))
  }
  if (last > 9 && current >= 6 && last - current <= 3) {
    M.push(li(current - 3, '...'));
    for (let i = last - 6; i <= last; i++) {
      M.push(li(i, `${i}`))
    }
  }
  return M.map(item => item)
};