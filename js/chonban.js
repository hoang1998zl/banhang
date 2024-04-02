const banItems = document.querySelectorAll(".ban-item");

banItems.forEach(banItem => {
  banItem.addEventListener("click", () => {
    if (banItem.classList.contains("chon-ban")) {
      banItem.classList.remove("chon-ban");
    } else {
      if (banItem.classList.contains("co-khach")) {
        banItem.classList.remove("chon-ban");
      } else {
        banItem.classList.add("chon-ban");
      }
    }
  });
});