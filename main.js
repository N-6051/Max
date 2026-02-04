document.querySelectorAll(".card p").forEach(p => {
  let html = p.innerHTML;
  let keywords = ["Axis", "IPO", "crores"];
  let newHtml = "";
  html.split(" ").forEach(word => {
    if (!isNaN(word) || keywords.includes(word)) {
      newHtml += `<strong>${word} </strong>`;
    } 
    else {
      newHtml += word+" ";
    }
  })
  p.innerHTML = newHtml;
})
