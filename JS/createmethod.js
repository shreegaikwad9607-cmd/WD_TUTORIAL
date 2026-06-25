let body = document.body
let firstchild=document.createElement("div")
firstchild.style.background ="linear-gradient(white,lightblue) "
firstchild.style.height = "90vh"
firstchild.style.width = "100%"

firstchild.innerHTML +=`<h1>Welcome To CreateElement  </h1> 
<button onlick="myClick()">click</button>
<table style="border-collapse: collapse; width: 100%;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Name</th>
      <th style="border: 1px solid #dddddd; padding: 8px; text-align: left;">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">Alice</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Developer</td>
    </tr>
    <tr>
      <td style="border: 1px solid #dddddd; padding: 8px;">Bob</td>
      <td style="border: 1px solid #dddddd; padding: 8px;">Designer</td>
    </tr>
  </tbody>
</table>
 `

body.appendChild(firstchild);