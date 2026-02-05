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



let data = 
`KPI,Sep 30，2025,Mar 31，2025;
RoNW,3.6%,12.6%;
Pat Margin,4.50%,8.00%;
EBITDA Margin,11.90%,14.40%
`;


function createTable(data, id, reverse, width=0, height=0) {
  let html = "";
  data.split(";").forEach((row, idx) => {
    html += `<tr>`;
    row.split(",").forEach(column => {
      if(idx == 0) {
        html += `<th>${column}</th>`;
      } else {
        html += `<td>${column}</td>`;
      }
    })
    html += `</tr>`;
  })
  document.getElementById(id).innerHTML = html;
  if(width) {
    document.getElementById(id).style.width = width;
  } if(height) {
    document.getElementById(id).style.height = height;
  } if(reverse) {
    document.getElementById(id).classList.add("reverseHeading");
  }
  
  
}

let hol =
`
,Pre IPO, Post IPO;
Promoter Holding,18.19%,Subject to change
`;
createTable(data, "sam", true)
createTable(hol, "hol", true)
