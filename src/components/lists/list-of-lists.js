import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListOfLists = ({ lists, onDelete }) => (
  <ol>
    {lists.map((list) => (
      <li key={list.id}>
        <Link to={`/list/${list.id}`}>{list.name}</Link>

        <button
          className="delete-btn"
          onClick={() => onDelete(list.id)}
        >
          <i className="fas fa-trash-alt" />
        </button>
      </li>
    ))}
  </ol>
);

export default ListOfLists;

ListOfLists.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};
