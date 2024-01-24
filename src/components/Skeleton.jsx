import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    width={300}
    height={480}
    viewBox="0 0 300 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="6" rx="12" ry="12" width="281" height="258" />
    <rect x="8" y="285" rx="0" ry="0" width="281" height="23" />
    <rect x="5" y="318" rx="21" ry="21" width="282" height="90" />
    <rect x="17" y="427" rx="6" ry="6" width="98" height="24" />
    <rect x="140" y="419" rx="20" ry="20" width="146" height="40" />
  </ContentLoader>
);

export default Skeleton;
