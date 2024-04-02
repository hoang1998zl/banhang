const itemKhuyenMai = document.querySelectorAll("#listkhuyenmai>div");

itemKhuyenMai.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("border-orange-400")) {
      item.classList.remove("border-orange-400")
    } else {
      item.classList.add("border-orange-400");
      item.classList.remove("border-gray-300");
    }

    itemKhuyenMai.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("border-orange-400");
      }
    });
  })
});