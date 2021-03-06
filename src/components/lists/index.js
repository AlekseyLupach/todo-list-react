import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withAuth0 } from '@auth0/auth0-react';
import AddEntityFrom from '../common/add-entity-form';
import ListOfLists from './list-of-lists';
import { addList, deleteList, getLists } from '../../store/lists/actions';
import Loader from '../common/loader';
import ActionStatus from '../../constans/action-status';
import EntityType from '../../constans/entity-type';

class Lists extends Component {
  componentDidMount() {
    const {
      getLists,
      auth0: { user },
    } = this.props;

    getLists(user.sub);
  }

  handleAddList = (newList) => {
    const {
      auth0: { user }, addList
    } = this.props;

    addList({ ...newList, userId: user.sub });
  }

  render() {
    const { lists, deleteList, status, } = this.props;

    return (
      <>
        <div className="add-form">
          <AddEntityFrom onSubmit={this.handleAddList} type={EntityType.LIST} />
        </div>

        <div className="lists">
          <ListOfLists lists={lists} onDelete={deleteList} />
        </div>

        {status === ActionStatus.LOADING && <Loader />}
      </>
    );
  }
}

Lists.propTypes = {
  // Обьекты записываем при помощи shape
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,

  addList: PropTypes.func.isRequired,
  deleteList: PropTypes.func.isRequired,
  getLists: PropTypes.func.isRequired,
  status: PropTypes.oneOf([
    ActionStatus.IDLE,
    ActionStatus.LOADING,
    ActionStatus.SUCCEEDED,
    ActionStatus.FAILED]).isRequired,
};

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    status: state.lists.status,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addList: (list) => dispatch(addList(list)),
    deleteList: (id) => dispatch(deleteList(id)),
    getLists: (userId) => dispatch(getLists(userId)),
  };
}

export default withAuth0(connect(mapStateToProps, mapDispatchToProps)(Lists));
