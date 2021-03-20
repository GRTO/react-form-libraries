import { Dimmer, Loader } from "semantic-ui-react";

const LoaderSpinner: React.FC = () => (
  <Dimmer active inverted>
    <Loader size="big">Loading ...</Loader>
  </Dimmer>
);

export default LoaderSpinner;
