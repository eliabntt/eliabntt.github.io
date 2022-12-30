import {useEffect} from "react";
import ReactGA from "react-ga";

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
  ReactGA.set({page: location.pathname});
  ReactGA.pageview(location.pathname);
}

function GAListener({trackingId}) {
  let location = useLocation();
  useEffect(() => {
    ReactGA.initialize(trackingId, { //debug:true
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