import "../styles/widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="article_left">
        <FiberManualRecordIcon />
      </div>
      <div className="article_right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="sidebar_right">
      <div className="widgets">
        <div className="widgets_header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle(
          "Sam Kerr First Woman on Fifa Cover",
          "1h ago - 2,120 readers"
        )}
        {newsArticle(
          "Why brands are unliking influencers",
          "1d ago - 900 readers"
        )}
        {newsArticle(
          "Property Prices tipped to fall",
          "2d ago - 1,170 readers"
        )}
        {newsArticle("Women Euros 2022 on the way", "1d ago - 985 readers")}
        {newsArticle("How to kill a hobby fast", "5d ago - 220 readers")}
      </div>

      <div className="footer">
        <a href="#top">About</a>
        <a href="#top">Accessibility</a>
        <a href="#top">Help Center</a>
        <br />
        <a href="#top">Privacy & Terms</a>
        <a href="#top">Ad Choices</a>
        <br />
        <a href="#top">Advertising</a>
        <a href="#top">Business Centers</a>
        <br />
        <a href="#top">© LinkedIn Corporation 2022</a>
      </div>
    </div>
  );
}

export default Widgets;
