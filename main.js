const API_URL = "https://api.escuelajs.co/api/v1/products";
const tbody = document.getElementById("product-body");

fetch(API_URL)
    .then(res => res.json())
    .then(products => {
        tbody.innerHTML = "";

        products.forEach(p => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>
                    <img src="${p.images[0]}" alt="">
                </td>
                <td>${p.title}</td>
                <td class="price">$${p.price}</td>
                <td>${p.description.substring(0, 50)}...</td>
                <td class="category">${p.category.name}</td>
            `;

            tbody.appendChild(tr);
        });
    })
    .catch(err => {
        tbody.innerHTML = `<tr><td colspan="5">❌ Lỗi load API</td></tr>`;
        console.error(err);
    });
