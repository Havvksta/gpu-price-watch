function renderProducts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  products.forEach(p => {
    const drop = Math.round(((p.oldPrice - p.newPrice) / p.oldPrice) * 100);

    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <h3>${p.name}</h3>
      <div class="price-row">
        <span class="old">$${p.oldPrice}</span>
        <span class="new">$${p.newPrice}</span>
        <span class="drop">-${drop}%</span>
      </div>
      <div class="meta">Updated ${p.updated}</div>
      <a class="button" href="${p.link}" target="_blank" rel="nofollow noopener">
        Check price
      </a>
    `;

    container.appendChild(card);
  });
}

renderProducts("product-list");
renderProducts("weekly-products");
