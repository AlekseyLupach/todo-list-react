import React, { Component } from 'react'

import { connect } from 'react-redux';

import AddListFrom from './add-list-from'
import ListOfLists from './list-of-lists'

import { addList, deleteList, getLists } from '../../store/lists/actions'
import Loader from '../common/loader';

class Lists extends Component {
    componentDidMount() {
        const { getLists } = this.props;

        getLists();
    }
    render() {
        const { lists, addList, deleteList, status } = this.props;

        return (
            <>
                <div className="add-form">
                    <AddListFrom onSubmit={addList} />
                </div>

                <div className="lists">
                    <ListOfLists lists={lists} onDelete={deleteList} />
                </div>

                {status === 'loading' && <Loader />}
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        lists: state.lists.lists,
        status: state.lists.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addList: (list) => dispatch(addList(list)),
        deleteList: (id) => dispatch(deleteList(id)),
        getLists: () => dispatch(getLists()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);