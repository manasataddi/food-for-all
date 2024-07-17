import React from "react";

//importing styles
import '../../../Styles/HomepageStyle/BannerStyle.css'

function BannerSection() {
  return (
    <>
      <section className="banner_section">
      <div className="banner_image_container">
        <img
          src="https://t4.ftcdn.net/jpg/04/76/57/27/360_F_476572792_zMwqHpmGal1fzh0tDJ3onkLo88IjgNbL.jpg"
          alt="bannerimage"
        />
        <div className="banner_content">
          <h1 className="banner_title">Welcome to Food For All</h1>
        </div>
      </div>
    </section>
    </>
  );
}

export default BannerSection;
