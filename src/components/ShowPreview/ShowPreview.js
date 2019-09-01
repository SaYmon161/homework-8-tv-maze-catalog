// Реализуйте компонент превью шоу.
// Он должен показывать название, описание и картинку шоу.

import React, { Component } from 'react';
import style from './ShowPreview.module.css';
import { Link } from 'react-router-dom';

class ShowPreview extends Component {
  state = {};
  render() {
    const { show } = this.props;

    return (
      <div className={`${style.container} t-preview`}>
        <>
          <Link to={`/shows/${show.id}`} className="t-link">
            {show.name}
          </Link>
          <img src={show.image.medium} alt={show.name} />
        </>
        <div dangerouslySetInnerHTML={{ __html: show.summary }}></div>
      </div>
    );
  }
}

export default ShowPreview;
