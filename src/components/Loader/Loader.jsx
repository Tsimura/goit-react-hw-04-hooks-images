import ContentLoader from 'react-content-loader';
const MyLoader = props => (
  <ContentLoader
    speed={2}
    width={600}
    height={120}
    viewBox="0 0 600 120"
    backgroundColor="#5422dd"
    foregroundColor="#f4f0f0"
    {...props}
  >
    <circle cx="184" cy="60" r="20" />
    <circle cx="426" cy="60" r="20" />
    <circle cx="303" cy="60" r="20" />
  </ContentLoader>
);
export default MyLoader;
