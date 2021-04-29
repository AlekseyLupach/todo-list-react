import React from 'react';
import PropTypes from 'prop-types';

const ListOfLists = ({ lists, onDelete }) => (
  <ol>
    {lists.map((list) => (
      <li key={list.id}>
        <a href="#">{list.name}</a>

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
