import {useEffect} from "react";
import ReactGA from "react-ga4";

import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom";

import PropTypes from "prop-types";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

function sendPageView(location) {
  ReactGA.send({ hitType: "pageview", page: location.pathname});
}

function GAListener({trackingId}) {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize(trackingId, { 
  });
    return sendPageView(location);
  }, [location, trackingId]);
  return null;
}

GAListener.propTypes = {
  children: PropTypes.node,
  trackingId: PropTypes.string,
  history: PropTypes.shape({
    listen: PropTypes.func,
  }),
};

export default withRouter(GAListener);