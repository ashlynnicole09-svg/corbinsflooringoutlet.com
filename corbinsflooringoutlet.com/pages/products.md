---
layout: default
title: "Products"
permalink: /products/
---

# Products

## Shop by Category
- [Luxury Vinyl Plank (LVP)]({{ "/products/luxury-vinyl-plank/" | relative_url }})
- [Hardwood]({{ "/products/hardwood/" | relative_url }})
- [Tile]({{ "/products/tile/" | relative_url }})

## LVP Collections
<ul>
{% assign collpages = site.pages | where: "layout", "collection" %}
{% assign collpages = collpages | where_exp: "p", "p.url contains '/products/luxury-vinyl-plank/'" %}
{% for p in collpages %}
  <li><a href="{{ p.url | relative_url }}">{{ p.title }}</a></li>
{% endfor %}
</ul>


