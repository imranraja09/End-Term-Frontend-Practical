    const followBtn = document.getElementById("follow-btn");
    const followerCountEl = document.getElementById("follower-count");

    let isFollowing = false;
    let followers = 120;

    followBtn.addEventListener("click", () => {
      isFollowing = !isFollowing;

      if (isFollowing) {
        followers = 121;
        followBtn.textContent = "Following";
        followBtn.classList.add("following");
      } else {
        followers = 120;
        followBtn.textContent = "Follow";
        followBtn.classList.remove("following");
      }

      followerCountEl.textContent = followers;
    });