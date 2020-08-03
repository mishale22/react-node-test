import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PrincipalView from '../components/PrincipalView';
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPosts: () => dispatch(fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PrincipalView);
